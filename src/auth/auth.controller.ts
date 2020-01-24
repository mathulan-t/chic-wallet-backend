import { Controller, Body, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import LoginUserDTO from './validators/login-user-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Body() loginUserDTO: LoginUserDTO): Promise<{ access_token: string }> {
    return this.authService.login(loginUserDTO);
  }
}
