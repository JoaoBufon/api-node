import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ClientesService } from './clientes.service';

@Controller('clientes')
export class ClientesController {
    constructor (private readonly clientesService: ClientesService){}
    @Get()
    findAll(){
        return this.clientesService.findAll();
    }

    @Post()
    create(@Body() cliente: any){
        return this.clientesService.create(cliente);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() cliente: any){
        return this.clientesService.update(id, cliente);
    }

    @Delete(':id')
    remove(@Param('id') id:number){
        return this.clientesService.remove(id);
    }
}
