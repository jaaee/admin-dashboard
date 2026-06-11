import {Transaction} from "./transaction.model";

export interface TransactionPage {
  content: Transaction[];
  totalElements: number;
  pageSize:number;
  pageNumber:number;
}