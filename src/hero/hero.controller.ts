import { Controller, Get } from "@nestjs/common";

@Controller("hero")
export class HeroController {
      @Get("index")
      index(): string {
            return 'hero index';
      }

      @Get('create')
      create() {
            return('here create');
      }
}