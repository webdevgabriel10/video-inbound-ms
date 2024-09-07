import { Body, Controller, Get, Post } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SubscribeNewUserUseCase } from 'src/application/use-cases/SubscribeNewUser';

@Controller()
export class VideoInboundController {
  constructor(private readonly subscribeUserService: SubscribeNewUserUseCase) {}

  @Post('/subscription')
  async processSubscription(@Body() subscription: any): Promise<any> {
    return await this.subscribeUserService.queueNewUserSubscription(
      subscription,
    );
  }

  @EventPattern('video-inbound-service')
  async handleSubscriptionEvent(@Payload() subscription: any): Promise<any> {
    try {
      console.log('Received subscription from RabbitMQ queue:', subscription);

      await this.subscribeUserService.handleSubscription(subscription);

      return subscription;
    } catch (error) {
      console.error('Error processing RabbitMQ subscription:', error);
      throw error;
    }
  }
}
