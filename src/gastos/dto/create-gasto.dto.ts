import { Column, ManyToOne } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { IsAlpha, IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";
import { TiposMovimiento } from "./TiposMovimiento";

export class CreateGastoDto {

  @IsNotEmpty()
  @MaxLength(20)
  readonly descripcion: string;

  @IsInt()
  @IsOptional()
  readonly categoriaId?: number;


  readonly fecha: Date;

  @IsNumber()
  readonly valor: number;

  @IsString()
  @MaxLength(1)
  readonly tipoMovimiento: string;


}


