import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Clientes } from 'src/schemas/clientes.schema';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';


@Injectable()
export class ClientesService {
    constructor(
        @InjectModel(Clientes.name) private clienteModel: Model<Clientes>
    ) {}

    async remove(idCliente: number) {
        const cliente = await this.clienteModel.findOneAndDelete({ idCliente: Number }).exec();
        return cliente;
    }

    async update(idConta: number, updateClienteDto: UpdateClienteDto) {
       const cliente = await this.clienteModel.findOneAndUpdate({ idCliente: Number }, updateClienteDto).exec();
       return cliente;    
    }

    create(cliente: CreateClienteDto) {
        const createdCliente = new this.clienteModel(cliente);
        return createdCliente.save();
    }

    findAll() {
        return this.clienteModel.find().exec();
    }

    findOne(idCliente: number | undefined) {
        if (idCliente === undefined){
            return 'Necessario informar o id do cliente';
        }
        return this.clienteModel.findOne({ idCliente: Number }).exec();
    }
}
