import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
/*
permite crear el repository
 */
import { InjectRepository } from '@nestjs/typeorm'
/*
crea automaticamente los repo
 */
import { Repository} from "typeorm";
import { Categoria } from "./entities/categoria.entity";

@Injectable()
export class CategoriasService {

  /*
  inyectarmos el repositorio
   */
  constructor(@InjectRepository(Categoria) private  categoriasRepository: Repository<Categoria>) {
  }

  /*
utilizamos el repo
 */
  findAll() {
    return this.categoriasRepository.find();
  }

  async create(createCategoriaDto: CreateCategoriaDto) {

     const newCategoria =  await this.categoriasRepository.create(createCategoriaDto)
     return await this.categoriasRepository.save(newCategoria);
  }



  async findOne(id: number) {
     const categorias = await this.categoriasRepository.findOneBy({ id})
     return categorias;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    const updCategoria =  await this.categoriasRepository.findOneBy({id})
    if(!updCategoria){
      throw new NotFoundException(`Categoria ${id} not found`)
    }else{
      await this.categoriasRepository.merge(updCategoria , updateCategoriaDto);
      return await this.categoriasRepository.save(updCategoria);
    }

  }

  async remove(id: number) {
    const delCategoria =  await this.categoriasRepository.findOneBy({id})
    if(!delCategoria){
      throw new NotFoundException(`Categoria ${id} not found`)
    }else {
      return await this.categoriasRepository.delete(id);
    }
  }
}
