import { Module } from '@nestjs/common';
import { BillingController } from './billing.controller';
import { BillingService } from './billing.service';
import { AuthModule, RmqModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi'
@Module({
  imports: [
    AuthModule,
    RmqModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        RABBIT_MQ_URI: joi.string().required(),
        RABBIT_MQ_BILLING_QUEUE: joi.string().required()
      })
    })],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule { }
