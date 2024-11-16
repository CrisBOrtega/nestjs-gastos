import { CreateGastoDto } from "./create-gasto.dto";
import { Categoria } from "../../categorias/entities/categoria.entity";
import { IsAlpha, IsInt, IsNotEmpty, IsNotEmptyObject, IsNumber, IsOptional, ValidateNested } from "class-validator";
import { CreateCategoriaDto } from "../../categorias/dto/create-categoria.dto";
import { Type } from "class-transformer";

export class CreateGastoCategoriaDto {

    @IsNotEmpty()
    readonly descripcion: string;


    readonly fecha: Date;

    @IsNumber()
    readonly valor: number;

    @IsAlpha()
    readonly tipoMovimiento: string;

    @IsNotEmpty()
    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateCategoriaDto)
    readonly categoria: CreateCategoriaDto


}