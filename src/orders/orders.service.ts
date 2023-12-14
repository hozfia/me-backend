import { Injectable, NotFoundException, Logger, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Table } from './schemas/Table.schema';

@Injectable()
export class OrdersService {
    private readonly logger = new Logger(OrdersService.name);
    constructor(@InjectModel(Table.name) private tableModel: Model<Table>) { }

    async GetAllTablse(restaurang_id: string): Promise<Table[]> {
        try {
            const Table = await this.tableModel.find({restr_id: "233dsd"});
            return Table;
        } catch (error) {
            this.logger.error(`An error occurred while retrieving table: ${error.message}`);
            throw new Error('An error occurred while retrieving table');
        }
    }
}
