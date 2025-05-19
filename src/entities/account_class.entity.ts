import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ReviewFee } from './review_fee.entity';

@Entity({ name: 'ACCOUNT_CLASS_INFO' })
export class AccountClassInfo {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'CLIENT_ID' })
  clientId: string;

  @Column({ name: 'ACCOUNT_ID' })
  accountId: string;

  @ManyToOne(() => ReviewFee, (reviewFee) => reviewFee.accountClasses)
  @JoinColumn([{ name: 'CLIENT_ID', referencedColumnName: 'clientId' }])
  reviewFee: ReviewFee;
}
