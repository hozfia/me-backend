import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Table {

  @Prop()
  restr_id: string;

  @Prop()
  table_name: string;

}

export type TableDocument = Table & Document;
export const TableSchema = SchemaFactory.createForClass(Table);
