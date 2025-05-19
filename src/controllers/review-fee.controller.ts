import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { ReviewFeeService } from '../services/review_fee.service';
import { ReviewFee } from '../entities/review_fee.entity';

@ApiTags('Review Fees')
@Controller('review-fees')
export class ReviewFeeController {
  constructor(private readonly reviewFeeService: ReviewFeeService) {}

  @Get()
  @ApiOperation({ summary: 'Get all review fees' })
  @ApiResponse({
    status: 200,
    description: 'Returns all review fees',
    type: [ReviewFee],
  })
  findAll(): Promise<ReviewFee[]> {
    return this.reviewFeeService.findAll();
  }

  @Get('client/:clientId')
  @ApiOperation({ summary: 'Get review fees by client ID' })
  @ApiParam({ name: 'clientId', type: String, description: 'Client ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns review fees for a specific client',
    type: [ReviewFee],
  })
  findByClientId(@Param('clientId') clientId: string): Promise<ReviewFee[]> {
    return this.reviewFeeService.findByClientId(clientId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new review fee' })
  @ApiResponse({
    status: 201,
    description: 'Review fee has been created successfully',
    type: ReviewFee,
  })
  create(@Body() reviewFee: Partial<ReviewFee>): Promise<ReviewFee> {
    return this.reviewFeeService.create(reviewFee);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a review fee' })
  @ApiParam({ name: 'id', type: Number, description: 'Review Fee ID' })
  @ApiResponse({
    status: 200,
    description: 'Review fee has been deleted successfully',
  })
  delete(@Param('id') id: number) {
    return this.reviewFeeService.delete(id);
  }
}
