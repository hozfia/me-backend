import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TableSchema } from './schemas/Table.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{ name: 'Table', schema: TableSchema }]),
  ],
  providers: [OrdersService],
  controllers: [OrdersController]
})
export class OrdersModule {}
