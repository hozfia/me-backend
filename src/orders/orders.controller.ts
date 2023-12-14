import { Controller, Get } from '@nestjs/common';
import {OrdersService} from './orders.service'
import { Table } from './schemas/Table.schema';

@Controller('api/orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}
    @Get('tables')
    getTables(): Promise<Table[]> {
      return this.orderService.GetAllTablse('dsfsdfsd');
    }
}
