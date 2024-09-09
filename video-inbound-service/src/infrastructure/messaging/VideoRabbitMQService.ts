// src/infrastructure/messaging/VideoRabbitMQService.ts
import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class VideoRabbitMQService {
  private client: ClientProxy;

  constructor( 
  ) {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://admin:admin@rabbitmq:5672'],
        queue: 'video-inbound-service',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  async emitUserSubscription(subscription: any): Promise<any> {
    try {
        await firstValueFrom(this.client.emit('video-inbound-service', subscription));

        console.log('Message sent to RabbitMQ:', subscription);
      return subscription;
    } catch (err) {
      console.error('Failed to send message to RabbitMQ:', err);
      throw err;
    }
  }
}
