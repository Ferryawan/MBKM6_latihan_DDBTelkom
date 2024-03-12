import { Hero } from './interfaces/hero.interface';
export declare class HeroService {
    private readonly heroes;
    create(hero: Hero): void;
    findAll(): Hero[];
}
