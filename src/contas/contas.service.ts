import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contas } from 'src/schemas/contas.schema';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';

@Injectable()
export class ContasService {
  constructor(@InjectModel(Contas.name) private contaModel: Model<Contas>) {}
  create(conta: CreateContaDto)  {
    const createdConta = new this.contaModel(conta);
    return createdConta.save();
  }

  findAll()  {
    return this.contaModel.find().exec();
  }

  findOne(numero: Number | undefined)  {
    if (numero === undefined){
        return 'Necessario informar o numero da conta';
    }
    return this.contaModel.findOne({ numero: Number }).exec();
  }

  async update(numero: number, updateContaDto: UpdateContaDto)  {
    const conta = await this.contaModel.findOneAndUpdate({ numero: Number }, updateContaDto).exec();
    return conta
  }

  async remove(id: number)  {
    const conta = await this.contaModel.findOneAndDelete({ numero: Number }).exec();
    return conta;
  }
}