export interface RequestResult<G = XMLHttpRequest> {
  ok: boolean;
  status: number;
  statusText: string;
  data: string;
  json: <T>() => T;
  headers: string;
  response: G;
}
