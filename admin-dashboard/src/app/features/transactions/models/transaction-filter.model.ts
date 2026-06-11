export interface TransactionFilter {

  searchKeyword: string;

  status: string | null;

  type: string | null;

  channel: string | null;

  pageNumber: number;

  pageSize: number;

  sortField: string;

  sortOrder: 'ASC' | 'DESC';

}