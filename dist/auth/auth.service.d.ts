import { AuthDto } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    login(dto: AuthDto): Promise<{
        access_token: string;
        id: number;
        email: string;
        name: string;
        active: boolean;
        createdAt: Date;
        updateAt: Date;
    }>;
}
