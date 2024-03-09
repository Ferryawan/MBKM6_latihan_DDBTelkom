import { Controller, Get, HttpCode, Post, Res, Header, Redirect, Param, Body, } from "@nestjs/common";
import { response } from "express";
import { request } from "http";
import { CreateHeroDto } from "./dto/create-hero.dto";
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
      @Header('Content-Type', 'application/json')
      index(@Res() response) {
            response.json(heroes);
      }
      @Get('detail/:id')
      show(@Param('id') id:string){
            return'hero by' + id;
      }


      @Get('create')
      create(@Res({passthrough: true}) response): string {
           response.cookie('name', 'baledemia');
           return 'hero create';
      }
      @Post('store')
      @HttpCode(201)
      store(@Res() request, @Body() createHeroDto: CreateHeroDto , @Res({passthrough: true})response) {
            // response.status(201).json(request.body);
           try{
            // const {id, nama, type, gambar} = request.body;
            // heroes.push({
            //       id,
            //       nama,
            //       type,
            //       gambar
            // });
            return createHeroDto;
            // return heroes;
           } catch (error) {
            response.status(500).json({message: error});
           }
      }
      @Get("/welcome")
      @Redirect('https://docs.nestjs.com/')
      hello() {
            return 'welcome';
      }
}