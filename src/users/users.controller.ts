import { Controller, UseGuards, Req, Get } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@Controller('users')
export class UsersController {
    @Get('profile')
    @UseGuards(AuthGuard)
    getProfile(@Req() req) {
        return { user : req.user};
    }
}
