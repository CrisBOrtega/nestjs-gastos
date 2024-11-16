import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriasModule } from './categorias/categorias.module';
import { GastosModule } from './gastos/gastos.module';



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3310,
      username: 'root',
      password: 'admin',
      database: 'nestjs',
      entities: [],
      /*
      Para cargar tablas automaticamente
       */
      synchronize: true,
      autoLoadEntities: true,
      //dropSchema: true
    }),
    CategoriasModule,
    GastosModule,
  ],
  controllers: [AppController  ],
  providers: [AppService],
})
export class AppModule {}
