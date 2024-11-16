import { Controller, Get, Param, Query } from "@nestjs/common";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola ficha 2898';
  }

  @Get('nuevo')
  getNuevo(): string {
    return 'soy nuevo';
  }

  @Get('products/:id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  prods(@Param() params: any): string {
    return `productos ${params.id}`;
  }

  @Get('productos')
  getProducts(
    @Query('limit') limit: number = 100,
    @Query('offset') offset: number = 200,
  ): string {
    return `productos limite ${limit}, numero: ${offset} `;
  }
}
