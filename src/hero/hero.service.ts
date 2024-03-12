import { Injectable } from '@nestjs/common';
import { Hero } from './interfaces/hero.interface';

@Injectable()
export class HeroService {
  private readonly heroes: Hero[] = [
            {
                  id: 1,
                  nama: 'Aurora',
                  type: 'mage',
                  gambar: 'aurora.jpg',
            },
            {
                  id: 2,
                  nama: 'Zilong',
                  type: 'Figter',
                  gambar: 'zoling.jpg',
            },
            {
                  id: 3,
                  nama: 'Akai',
                  type: 'Tank',
                  gambar: 'akai.jpg',
            },
  ];

  create(hero: Hero) {
    this.heroes.push(hero);
  }

  findAll(): Hero[] {
    return this.heroes;
  }
}