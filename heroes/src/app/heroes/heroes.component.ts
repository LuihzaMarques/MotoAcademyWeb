import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import {HEROES} from './mocks/Hero.mocks'
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes: Hero[] = []
  selectedHero?: Hero;


  constructor(
    private heroService: HeroService,
    private messageService: MessageService
    ){}  

  ngOnInit(): void {
    this.getHeroes()
  }

 
  onSelectHero(hero: Hero): void{
    this.selectedHero = hero
    this.messageService.add(`HeroesComponent: Selected hero id ${hero.id}`)
  }
  



  getHeroes(): void{
    this.heroService.getHeroesMock().subscribe(
      heroes=> this.heroes = heroes
    )}
} //concordo com o hero service, vou chamar o metodo e ele será chamado assicronomanente, para não deixar parado. 



// this ? selectHero é um atribuito, e para se ter acesso precisa do THIS
// referenciando algo dentro de um contexto. 
// conceitos de POO 
