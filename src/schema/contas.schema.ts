import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'contas' })
export class Contas {
  @Prop({ required: true })
  numero: number;
  @Prop({ required: true })
  titular: string;
  @Prop({ required: true })
  saldo: number;
  @Prop({ required: true })
  limite: number;
}
export const ContasSchema = SchemaFactory.createForClass(Contas)