import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  Index,
} from 'typeorm';
import { AccountClassInfo } from './account_class.entity';

@Entity({ name: 'REVIEW_FEE' })
@Index('IDX_REVIEW_FEE_CLIENT_ID', ['clientId']) // Add this line
export class ReviewFee {
  @PrimaryGeneratedColumn({ name: 'ID' })
  id: number;

  @Column({ name: 'PERIOD_ID' })
  periodId: number;

  @Column({ name: 'CLIENT_ID' })
  clientId: string;

  @Column({ name: 'CLIENT_NAME', nullable: true })
  clientName: string;

  @OneToMany(() => AccountClassInfo, (accountClass) => accountClass.reviewFee)
  accountClasses: AccountClassInfo[];
}
