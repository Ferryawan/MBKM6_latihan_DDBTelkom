import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { HeroService } from "./hero.service";
export declare class HeroController {
    private heroService;
    constructor(heroService: HeroService);
    index(response: any): void;
    show(id: number): import("src/hero/interfaces/hero.interface").Hero;
    create(response: any): string;
    store(request: any, createHeroDto: CreateHeroDto, response: any): import("src/hero/interfaces/hero.interface").Hero[];
    update(id: number, updateHeroDto: UpdateHeroDto): import("src/hero/interfaces/hero.interface").Hero[];
    destroy(id: number): import("src/hero/interfaces/hero.interface").Hero[];
    hello(): string;
}
