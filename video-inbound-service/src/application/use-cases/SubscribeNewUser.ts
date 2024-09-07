// src/application/use-cases/SubscribeNewUserUseCase.ts
import { Injectable } from '@nestjs/common';
import { VideoRabbitMQService } from 'src/infrastructure/messaging/VideoRabbitMQService';
import { DynamoDBService } from 'src/infrastructure/persistence/DynamoDBService';
import { S3StorageService } from 'src/infrastructure/storage/S3StorageService';

@Injectable()
export class SubscribeNewUserUseCase {
  constructor(
    private readonly processSubscriptionQueue: VideoRabbitMQService,
  ) {}

  async queueNewUserSubscription(subscription: any): Promise<any> {
    try {
      // Emit the message to RabbitMQ
      const messageProduced = await this.processSubscriptionQueue.emitUserSubscription(subscription);
      console.log('Subscription emitted to RabbitMQ:', messageProduced);
    } catch (error) {
      console.error('Failed to queue subscription:', error);
      // Handle or re-throw the error as needed
    }
  }

    // Method to handle the actual processing of the subscription
    async handleSubscription(subscription: any): Promise<any> {
        try {
          // Process the message (e.g., store video and save metadata)
        //   await this.storageService.storeVideo(subscription);
        //   console.log('Subscription stored in S3');
    
        //   await this.persistenceService.saveVideoMetaData(subscription);
        //   console.log('Subscription metadata saved to DynamoDB');
    
          return subscription;
        } catch (error) {
          console.error('Failed to process subscription:', error);
          throw error;
        }
      }

}
