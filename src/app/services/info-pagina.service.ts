import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage, InfoTeam } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  loaded: boolean = false
  info: InfoPage = {}
  team: InfoTeam[] = []

  constructor(private http: HttpClient) {
    this.loadInfo()
    this.loadTeam()
  }

  private loadInfo() {
    // Leer el archivo JSON
    this.http
      .get('assets/data/infoPage.json')
      .subscribe( (r: InfoPage) => {
        this.loaded = true
        this.info = r
      });
  }

  private loadTeam() {
    // Leer el archivo JSON
    this.http
      .get('https://pruebas-vue-3fab3-default-rtdb.europe-west1.firebasedatabase.app/team.json')
      .subscribe( (r: any) => {
        this.loaded = true
        this.team = r
      });
  }
}
