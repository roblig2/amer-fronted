export interface Pageable<T> {
  content: T[];
  page: Page
}
interface Page{
  totalElements: number;
  size: number;
  number: number;
  totalPages:number
}
