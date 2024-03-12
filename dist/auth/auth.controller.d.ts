import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
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
