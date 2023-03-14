import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import PersonEntity from '../database/entities/person.entity';
import WalletEntity from '../database/entities/wallet.entity';
import PersonProductEntity from '../database/entities/person-products.entity';
import ProductEntity from '../database/entities/product.entity';
import { SavePersonAndProduct } from '../database/transactions/save-person-and-product.service';
import { PersonRepository } from '../database/repositories/person.repository';
import { ProductRepository } from '../database/repositories/product.repository';
import { WalletRepository } from '../database/repositories/wallet.repository';
import { PersonProductsRepository } from '../database/repositories/person-products.repository';

@Module({
  providers: [
    TransactionService,
    SavePersonAndProduct,
    PersonRepository,
    PersonProductsRepository,
    ProductRepository,
    WalletRepository,
  ],
  imports: [
    TypeOrmModule.forFeature([
      PersonEntity,
      WalletEntity,
      PersonProductEntity,
      ProductEntity,
    ]),
  ],
  controllers: [TransactionController],
})
export class TransactionModule {}
