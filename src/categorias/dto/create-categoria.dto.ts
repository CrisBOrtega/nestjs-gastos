import { IsAlpha, IsNotEmpty, IsString, MaxLength } from "class-validator";


export class CreateCategoriaDto {

    @IsString({ message: 'Nombre de categoria es requerida' })
    @IsNotEmpty()
    @MaxLength(20)
    readonly name: string;
}
