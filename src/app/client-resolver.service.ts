import { Injectable } from '@angular/core';
import { ClientsResolved } from './models/client';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable, of} from 'rxjs';
import { ClientService } from './client.service';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientResolverService implements Resolve<ClientsResolved> {

  constructor(private clientService: ClientService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ClientsResolved> {

    return this.clientService.getClients().
    pipe(
      map(clients => ({clients: clients})),
      catchError(error => {
        const message = `Retrieval error: ${error}`;
        console.error(message);
        return of({clients: null, error: message});
      })
    );

  }
}
