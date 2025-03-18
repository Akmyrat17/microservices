import { Controller, Get, UseGuards } from '@nestjs/common';
import { BillingService } from './billing.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard } from '@app/common';

@Controller()
export class BillingController {
  constructor(private readonly billingService: BillingService) { }

  @Get()
  getHello(): string {
    return this.billingService.getHello();
  }

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleOrderCreated(
    @Payload() data: any, @Ctx() context: RmqContext
  ) {
    this.billingService.bill(data)
  }
}
