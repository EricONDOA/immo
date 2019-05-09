import { Component, OnInit } from '@angular/core';
import {Client, ClientsResolved} from '../models/client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  pageTitle = 'Liste de Client';
  clients: Client[];
  errorMessage: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const resolvedData: ClientsResolved = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.clients);
  }

  onProductRetrieved(clients: Client[]): void {
    this.clients = clients;

    if (!this.clients) {
      this.pageTitle = 'Pas de client renseigner';
    }
  }

}
