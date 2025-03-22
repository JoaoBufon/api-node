import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const CreateContaSchema = z.object({
  numero: z.number().int().positive(),
  titular: z.string().min(1, 'O titular é obrigatório'),
  saldo: z.number().nonnegative(),
  limite: z.number().nonnegative(),
});

export class CreateContaDto extends createZodDto(CreateContaSchema) {}  