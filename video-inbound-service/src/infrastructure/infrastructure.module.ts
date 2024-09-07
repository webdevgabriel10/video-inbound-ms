import { Module } from '@nestjs/common';
import { VideoRabbitMQService } from './messaging/VideoRabbitMQService';
import { DynamoDBRepository } from './persistence/DynamoDBRepository';
import { DynamoDBService } from './persistence/DynamoDBService';
import { S3StorageService } from './storage/S3StorageService';

@Module({
    imports: [],
    controllers: [],
    providers: [VideoRabbitMQService, DynamoDBRepository, DynamoDBService, S3StorageService],
    exports: [VideoRabbitMQService, DynamoDBService, S3StorageService],

})
export class InfrastructureModule {}
