import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from '../entities/order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,
  ) {}

  async findAll() {
    const qb = await this.orderRepository
      .createQueryBuilder('order')
      .leftJoin('order.user', 'user')
      .addSelect(['user.id', 'user.name'])
      .leftJoinAndSelect('order.product', 'product');

    console.log('qb', qb.getSql());
    const res = await qb.getMany();

    //console.log(res);
    return res;
  }

  findOne(id: number) {
    return this.orderRepository.findOne({
      where: { id },
      relations: ['user', 'product'],
    });
  }

  create(order: Partial<Order>) {
    return this.orderRepository.save(order);
  }
}
