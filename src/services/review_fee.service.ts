import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReviewFee } from '../entities/review_fee.entity';
import { AccountClassInfo } from 'src/entities/account_class.entity';

@Injectable()
export class ReviewFeeService {
  constructor(
    @InjectRepository(ReviewFee)
    private readonly reviewFeeRepository: Repository<ReviewFee>,
  ) {}

  async findAll() {
    const qb = await this.reviewFeeRepository
      .createQueryBuilder('reviewFee')
      .leftJoinAndSelect(
        'reviewFee.accountClasses',
        'accountClass',
        'accountClass.clientId = reviewFee.clientId',
      );

    console.log('Generated SQL:', qb.getSql());
    return qb.getMany();
  }

  findOne(id: number) {
    return this.reviewFeeRepository.findOne({
      where: { id },
      relations: ['accountClasses'],
    });
  }

  findByClientId(clientId: string) {
    return this.reviewFeeRepository.find({
      where: { clientId },
      relations: ['accountClasses'],
    });
  }

  create(reviewFee: Partial<ReviewFee>) {
    return this.reviewFeeRepository.save(reviewFee);
  }

  async update(id: number, reviewFee: Partial<ReviewFee>) {
    await this.reviewFeeRepository.update(id, reviewFee);
    return this.findOne(id);
  }

  async delete(id: number) {
    return this.reviewFeeRepository.delete(id);
  }
}
