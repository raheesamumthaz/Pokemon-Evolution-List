import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  pokemon: any = {
    "name": "",
    "evolutions": [],
  }

  subscriptions: Subscription[] = [];
  evolution: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService) { }

  set subscription(subscription: Subscription) {
    this.subscriptions.push(subscription);
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      console.log("params...", params)
      this.pokemon.name = params.name
      this.subscription = this.pokemonService.getPokemonVariations(params.name).subscribe(response => {

        if (!this.pokemon.evolutions || !this.pokemon.evolutions.length) {
          console.log("inside yes..")
          this.pokemon.evolutions = [];
          this.getChain(response)

        }

      }, error => console.log('Error Occurred:', error));
    });
  }

  //function to rearrange tree list
  getChain(response:any) {
    console.log("response...",response)
    this.pokemon.evolutions.push(response.name)
    if (response.variations.length > 0)
      this.getChain(response.variations[0])
    console.log("chain....", this.pokemon.evolutions)

  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription ? subscription.unsubscribe() : 0);
  }







}

