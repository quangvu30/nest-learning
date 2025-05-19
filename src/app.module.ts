import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Product } from './entities/product.entity';
import { Order } from './entities/order.entity';
import { ReviewFee } from './entities/review_fee.entity';
import { UsersController } from './controllers/users.controller';
import { ProductsController } from './controllers/products.controller';
import { OrdersController } from './controllers/orders.controller';
import { UsersService } from './services/users.service';
import { ProductsService } from './services/products.service';
import { OrdersService } from './services/orders.service';
import { ReviewFeeService } from './services/review_fee.service';
import { ReviewFeeController } from './controllers/review-fee.controller';
import { AccountClassInfo } from './entities/account_class.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'myuser',
      password: 'mypassword',
      database: 'mydatabase',
      entities: [User, Product, Order, ReviewFee, AccountClassInfo],
      synchronize: true, // Set to false in production
    }),
    TypeOrmModule.forFeature([
      User,
      Product,
      Order,
      ReviewFee,
      AccountClassInfo,
    ]),
  ],
  controllers: [
    AppController,
    UsersController,
    ProductsController,
    OrdersController,
    ReviewFeeController,
  ],
  providers: [
    AppService,
    UsersService,
    ProductsService,
    OrdersService,
    ReviewFeeService,
  ],
})
export class AppModule {}
