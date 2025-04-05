import { Controller, Get, Post, Body, Param, Put, Delete, UseGuards } from '@nestjs/common';
import { ContasService } from './contas.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guards/auth/auth.guard';

@ApiTags('Contas')
@Controller('contas')
export class ContasController {
  constructor(private readonly contasService: ContasService) {}

  @Post()
  @ApiBody({ type: CreateContaDto })
  @UseGuards(AuthGuard)
  create(@Body() createContaDto: CreateContaDto) {
    return this.contasService.create(createContaDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  findAll() {
    return this.contasService.findAll();
  }

  @Get(':numero')
  @UseGuards(AuthGuard)
  findOne(@Param('numero') updateContaDto: UpdateContaDto) {
    return this.contasService.findOne(updateContaDto.numero);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  update(@Param('numero') id: number, @Body() conta: any) {
    return this.contasService.update(id, conta);
  }

  @Delete(':numero')
  @UseGuards(AuthGuard)
  remove(@Param('numero') id: number) {
    return this.contasService.remove(id);
  }
}
