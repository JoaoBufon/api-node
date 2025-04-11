import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { AuthGuard } from 'src/guards/auth/auth.guard';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@ApiTags('Clientes')
@Controller('clientes')
@UseGuards(AuthGuard)
export class ClientesController {
    constructor (private readonly clientesService: ClientesService){}

    @Get()
    findAll(){
        return this.clientesService.findAll();
    }

    @Get(':idCliente')
    findOne(@Param('idCliente') updateClienteDto: UpdateClienteDto) {
        return this.clientesService.findOne(updateClienteDto.idCliente);
    }

    @Post()
    @ApiBody({ type: CreateClienteDto})
    create(@Body() createClienteDto: CreateClienteDto){
        return this.clientesService.create(createClienteDto);
    }

    @Put(':idCliente')
    update(@Param('idCliente') id: number, @Body() cliente: any){
        return this.clientesService.update(id, cliente);
    }

    @Delete(':idCliente')
    remove(@Param('idCliente') id:number){
        return this.clientesService.remove(id);
    }
}
