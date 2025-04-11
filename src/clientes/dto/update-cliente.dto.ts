import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateClienteSchema = z.object({
  idCliente: z.number().int().positive().optional(),
  nome: z.string().min(1).optional(),
  cpf: z.string().min(11).optional(),
  endereco: z.string().min(1).optional(),
  numeroTelefone: z.string().min(10).optional(),
});

export class UpdateClienteDto extends createZodDto(UpdateClienteSchema) {}  