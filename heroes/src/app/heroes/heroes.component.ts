import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HEROES} from './mocks/Hero.mocks'
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero;


  constructor(private heroService: HeroService){}

  ngOnInit(): void {
    this.getHeroes()
  }

  onSelectHero(hero: Hero){
    this.selectedHero = hero;   
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }
}

// this ? selectHero é um atribuito, e para se ter acesso precisa do THIS
// referenciando algo dentro de um contexto. 
// conceitos de POO 
