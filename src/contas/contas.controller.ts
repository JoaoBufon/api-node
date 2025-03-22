import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
    


@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  create(@Body() createContaDto: CreateContaDto) {
    return this.contasService.create(createContaDto);
  }

  @Get()
  findAll() {
    return this.contasService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero') updateContaDto: UpdateContaDto) {
    return this.contasService.findOne(updateContaDto.numero);
  }

  @Put(':id')
  update(@Param('numero') id: number, @Body() conta: any) {
    return this.contasService.update(id, conta);
  }

  @Delete(':numero')
  remove(@Param('numero') id: number) {
    return this.contasService.remove(id);
  }
}
