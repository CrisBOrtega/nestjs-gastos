import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gasto } from "../../gastos/entities/gasto.entity";

@Entity()
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;


  @Column({type: 'varchar', length: 20 })
  name: string;

  @OneToMany(() => Gasto ,
    (gasto) => gasto.categoria)
  gastos: Gasto[];



}
