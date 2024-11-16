import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Gasto } from "./entities/gasto.entity";
import { CreateCategoriaDto } from "../categorias/dto/create-categoria.dto";
import { CreateGastoCategoriaDto } from "./dto/create-gasto-categoria.dto";

@Controller('gastos')
export class GastosController {
  constructor(private readonly gastosService: GastosService) {}

  @Post()
  create(@Body() createGastoDto: CreateGastoDto) {
    return this.gastosService.create(createGastoDto);
  }

  @Post('categoria-new')
  createWithCategory(@Body() payload: CreateGastoCategoriaDto) {
      return this.gastosService.createWithCategory(payload);

  }

  @Get('categories/:id')
  async getGastosByCategory(@Param('id') id: number): Promise<Gasto[]> {
    return this.gastosService.findGastosByCategory(id);
  }

  @Get()
  findAll() {
    return this.gastosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gastosService.findOne(+id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGastoDto: UpdateGastoDto) {
    return this.gastosService.update(+id, updateGastoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gastosService.remove(+id);
  }
}
