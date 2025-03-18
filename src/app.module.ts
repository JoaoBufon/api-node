import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';
import { ClientesModule } from './clientes/clientes.module';

@Module({
  imports: [ContasModule, ClientesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
