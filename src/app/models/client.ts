export interface Client {
  fullname: string;
  email: string;
  email2: string;
  telDomicile: string;
  telPro: string;
  telMobile: string;
  telMobile2: string;
  fax: string;
  sexe: string;
}


export interface ClientsResolved {
  clients: Client[];
  error?: any;
}
