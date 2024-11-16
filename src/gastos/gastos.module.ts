import { Module } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { GastosController } from './gastos.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Gasto } from "./entities/gasto.entity";
import { Categoria } from "../categorias/entities/categoria.entity";

@Module({
  imports: [ TypeOrmModule.forFeature([Gasto, Categoria])],
  controllers: [GastosController],
  providers: [GastosService],
})
export class GastosModule {}
