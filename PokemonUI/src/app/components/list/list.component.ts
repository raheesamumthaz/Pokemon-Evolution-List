import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, concat } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  subscriptions: Subscription[] = [];

  constructor(private pokemonService: PokemonService) { }
  get pokemons(): any[] {
    return this.pokemonService.pokemons;
  }
  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }
  ngOnInit(): void {

    if (!this.pokemons.length) {
      this.loadMore();
    }
  }
  loadMore(): void {
    this.loading = true;
    this.subscription = this.pokemonService.getNext().subscribe(response => {
      console.log("repomse.....", response)
      this.pokemonService.next = response.next;
      response.results.map((i: any) => {
        this.pokemonService.pokemons.push(i);
      })

    }, error => console.log('Error Occurred:', error), () => this.loading = false);

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }
}
