import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categorias/entities/categoria.entity";

@Entity()
export class Gasto {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'varchar', length: 20 })
  descripcion: string;

  @Column({type: 'double' })
  valor:number


  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP'
  })
  fecha: Date;


  @ManyToOne(() => Categoria ,
    (category) => category.gastos)
  categoria: Categoria;

  @Column({type: 'varchar', length: 1 })
  tipoMovimiento: string


}


enum tipo{
  E ,
  I
}
