import { Controller, Get, HttpCode, Post, Res } from "@nestjs/common";
import { response } from "express";
import { request } from "http";
 let heroes = [
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
 ]

@Controller("hero")
export class HeroController {
      @Get("index")
      @HttpCode(200)
      index(@Res() response) {
            response.json(heroes);
      }

      @Get('create')
      create(@Res({passthrough: true}) response): string {
           response.cookie('name', 'baledemia');
           return 'hero create';
      }
      @Post('store')
      store(@Res() request, @Res({passthrough: true})response) {
            // response.status(201).json(request.body);
            const {id, nama, type, gambar} = request.body;
            heroes.push({
                  id,
                  nama,
                  type,
                  gambar
            });

            return heroes;
      }
}