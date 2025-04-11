import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({ collection: 'clientes' })
export class Clientes {
  @Prop({ required: true })
  idCliente: number;
  @Prop({ required: true })
  nome: string;
  @Prop({ required: true })
  cpf: string;
  @Prop({ required: true })
  endereco: string;
  @Prop({ required: true })
  numeroTelefone: string;
}
export const ClientesSchema = SchemaFactory.createForClass(Clientes)