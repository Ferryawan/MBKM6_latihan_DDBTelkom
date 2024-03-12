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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const bcrypt_1 = require("bcrypt");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register(dto) {
        const checkEmail = await this.findByEmail(dto.email);
        if (checkEmail) {
            throw new common_1.ConflictException('Email duplicated');
        }
        const newUser = await this.prisma.user.create({
            data: {
                ...dto,
                password: await (0, bcrypt_1.hash)(dto.password, 10),
            },
        });
        const { password, ...user } = newUser;
        return user;
    }
    create(createUserDto) {
        return 'This action adds a new user';
    }
    findAll() {
        return `This action returns all user`;
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    }
    async findById(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (user) {
            return user;
        }
        throw new common_1.NotFoundException('data User tidak di temukan');
    }
    update(id, updateUserDto) {
        return `This action returns a #${id} user`;
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map