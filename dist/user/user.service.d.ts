import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
export declare class UserService {
    private prisma;
    constructor(prisma: PrismaService);
    register(dto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findByEmail(email: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
    findById(id: number): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: number): string;
}
