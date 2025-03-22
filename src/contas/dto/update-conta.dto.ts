import { z } from 'zod';
import { createZodDto } from 'nestjs-zod';

export const UpdateContaSchema = z.object({
  numero: z.number().int().positive().optional(),
  titular: z.string().min(1).optional(),
  saldo: z.number().nonnegative().optional(),
  limite: z.number().nonnegative().optional(),
});

export class UpdateContaDto extends createZodDto(UpdateContaSchema) {}