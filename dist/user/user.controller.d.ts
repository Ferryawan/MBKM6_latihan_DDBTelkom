import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        id: number;
        email: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
    findAll(): string;
    findOne(id: string): Promise<{
        id: number;
        email: string;
        name: string;
        password: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
