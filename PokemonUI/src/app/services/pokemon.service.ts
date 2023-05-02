import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private url: string = environment.pokemonApiUrl + 'pokemon/';
  private _pokemons: any[] = [];
  private _next: string = '';

  constructor(private http: HttpClient) {
  }
  get pokemons(): any[] {
    return this._pokemons;
  }
    get next(): string {
    return this._next;
  }

  set next(next: string) {
    this._next = next;
  }
  getNext(): Observable<any> {
    const url = this.next === '' ? `${this.url}?limit=50` : this.next;
  
    return this.http.get(url);
  }
}
