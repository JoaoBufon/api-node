import { Module } from '@nestjs/common';
import { ClientesController } from './clientes.controller';
import { ClientesService } from './clientes.service';
import { AuthService } from 'src/auth/auth.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Clientes, ClientesSchema } from 'src/schemas/clientes.schema';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
     {name : Clientes.name, schema: ClientesSchema},
    ]),
  ],
  controllers: [ClientesController],
  providers: [ClientesService, AuthService]
})
export class ClientesModule {}
