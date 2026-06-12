import { Injectable, signal } from '@angular/core';
import { LiveCounter } from '../../transactions/models/live-counter.model';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import {API_ENDPOINTS} from "./../../../core/shared/constants/api.constants";

@Injectable({
  providedIn: 'root',
})
export class TransactionDashboardSocket {
 private client!: Client;

  readonly liveCounters =
    signal<LiveCounter | null>(null);

  connect(): void {

    if (this.client?.connected) {
      return;
    }

    const socket = new SockJS(
    API_ENDPOINTS.SYSTEM + "dashboard-ws"
    );

    this.client = new Client({

      webSocketFactory: () => socket,

      reconnectDelay: 5000,

      debug: (message) => {
        console.log('STOMP:', message);
      }
    });

    this.client.onConnect = () => {

      console.log('WebSocket Connected');

      this.client.subscribe(
        '/topic/live-counters',
        message => {

          const response: LiveCounter =
            JSON.parse(message.body);

          console.log(
            'Received Live Counter:',
            response
          );

          this.liveCounters.set(response);
        }
      );
    };

    this.client.onStompError = frame => {

      console.error(
        'Broker Error:',
        frame.headers['message']
      );

      console.error(
        frame.body
      );
    };

    this.client.activate();
  }

  disconnect(): void {

    if (this.client) {

      this.client.deactivate();

      console.log(
        'WebSocket Disconnected'
      );
    }
  }
}
