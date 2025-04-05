import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { Contas, ContasSchema } from 'src/schemas/contas.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {name : Contas.name, schema: ContasSchema},
    ]),
  ],
  controllers: [ContasController],
  providers: [ContasService, AuthService]
})
export class ContasModule {}
