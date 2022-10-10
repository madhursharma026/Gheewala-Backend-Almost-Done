import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport'
import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

