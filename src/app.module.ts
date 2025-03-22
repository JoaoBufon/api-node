import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { ClientesModule } from './clientes/clientes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContasModule, ClientesModule, MongooseModule.forRoot('mongodb+srv://jvbufon75:<db_password>@projeto-api-node.rqwcs.mongodb.net/?retryWrites=true&w=majority&appName=projeto-api-node')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
