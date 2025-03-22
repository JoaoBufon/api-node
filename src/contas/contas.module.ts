import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContasService } from './contas.service';
import { Contas, ContasSchema } from 'src/schema/contas.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name : Contas.name, schema: ContasSchema}])],
  controllers: [ContasController],
  providers: [ContasService]
})
export class ContasModule {}
