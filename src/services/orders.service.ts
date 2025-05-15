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

  findAll() {
    return this.orderRepository.find({ relations: ['user', 'product'] });
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
