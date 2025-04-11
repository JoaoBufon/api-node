import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateClienteSchema = z.object({
  idCliente: z.number().int().positive(),
  nome: z.string().min(1, 'O nome é obrigatório'),
  cpf: z.string().min(11, 'O cpf é obrigatório'),
  endereco: z.string().min(1, 'O endereco é obrigatório'),
  numeroTelefone: z.string().min(10, 'O numero de telefone é obrigatório'),
});

export class CreateClienteDto extends createZodDto(CreateClienteSchema) {}  