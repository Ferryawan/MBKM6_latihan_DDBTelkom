"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HeroController = void 0;
const common_1 = require("@nestjs/common");
const create_hero_dto_1 = require("./dto/create-hero.dto");
const update_hero_dto_1 = require("./dto/update-hero.dto");
const hero_service_1 = require("./hero.service");
let HeroController = class HeroController {
    constructor(heroService) {
        this.heroService = heroService;
    }
    index(response) {
        response.json(this.heroService.findAll());
    }
    show(id) {
        const hero = this.heroService.findAll().filter((hero) => {
            return hero.id == id;
        });
        return hero[0];
    }
    create(response) {
        response.cookie('name', 'baledemia');
        return 'hero create';
    }
    store(request, createHeroDto, response) {
        try {
            this.heroService.create(createHeroDto);
            return this.heroService.findAll();
        }
        catch (error) {
            response.status(500).json({ message: error });
        }
    }
    update(id, updateHeroDto) {
        this.heroService.findAll().filter((hero) => {
            if (hero.id == id) {
                hero.nama = updateHeroDto.nama;
                hero.type = updateHeroDto.type;
            }
        });
        return this.heroService.findAll();
    }
    destroy(id) {
        const hero = this.heroService.findAll().filter((hero) => {
            return hero.id != id;
        });
        return hero;
    }
    hello() {
        return 'welcome';
    }
};
exports.HeroController = HeroController;
__decorate([
    (0, common_1.Get)("index"),
    (0, common_1.HttpCode)(200),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "index", null);
__decorate([
    (0, common_1.Get)('detail/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "show", null);
__decorate([
    (0, common_1.Get)('create'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], HeroController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('store'),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_hero_dto_1.CreateHeroDto, Object]),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "store", null);
__decorate([
    (0, common_1.Put)("update/:id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_hero_dto_1.UpdateHeroDto]),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('destroy/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "destroy", null);
__decorate([
    (0, common_1.Get)("/welcome"),
    (0, common_1.Redirect)('https://docs.nestjs.com/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HeroController.prototype, "hello", null);
exports.HeroController = HeroController = __decorate([
    (0, common_1.Controller)("hero"),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroController);
//# sourceMappingURL=hero.controller.js.map