import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';

import { InjectRepository } from '@nestjs/typeorm'

import { Repository} from "typeorm";
import { Categoria } from "../categorias/entities/categoria.entity";
import { Gasto } from "./entities/gasto.entity";
import { CreateGastoCategoriaDto } from "./dto/create-gasto-categoria.dto";

@Injectable()
export class GastosService {

  constructor(@InjectRepository(Gasto) private gastoRepository: Repository<Gasto> ,
              @InjectRepository(Categoria) private categoriasRepository: Repository<Categoria>) {
  }

  async findGastosByCategory(categoryId: number): Promise<Gasto[]> {
    return await this.gastoRepository.find({ where: { categoria : {id: categoryId} } });
  }

  async create(createGastoDto: CreateGastoDto) {
      const { descripcion ,
              valor ,
              fecha,
              categoriaId,
              tipoMovimiento } = createGastoDto;
      const categoria = await this.categoriasRepository.findOneBy({ id: +categoriaId } );
      if (!categoria) {
        throw new NotFoundException(`Categoria ${categoria} not found`);
      }
      const newGasto = new Gasto()
      newGasto.descripcion = descripcion
      newGasto.valor = valor
      newGasto.fecha = fecha
      newGasto.categoria = categoria
      newGasto.tipoMovimiento = tipoMovimiento

    return await this.gastoRepository.save(newGasto)

  }

  async createWithCategory(createGastoCategoryiaDto: CreateGastoCategoriaDto) {
      const { descripcion,
              valor ,
              fecha,
              tipoMovimiento,
              categoria  } = createGastoCategoryiaDto;
      const  newCat =  await this.categoriasRepository.create(categoria)
      const newCategoria =     await this.categoriasRepository.save(newCat);

      //const idCategoria = newCategoria.id
      const newGasto = new Gasto()
      newGasto.descripcion = descripcion
      newGasto.valor = valor
      newGasto.fecha = fecha
      newGasto.tipoMovimiento = tipoMovimiento
      newGasto.categoria = newCategoria

      return await this.gastoRepository.save(newGasto);


  }

  findAll() {
    return this.gastoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} gasto`;
  }

  async update(id: number, updateGastoDto: UpdateGastoDto) {
    const updGasto =  await this.gastoRepository.findOneBy({id})
    if(!updGasto){
      throw new NotFoundException(`Gasto ${id} not found`)
    }else{
      await this.gastoRepository.merge(updGasto , updateGastoDto);
      return await this.gastoRepository.save(updGasto);
    };
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
