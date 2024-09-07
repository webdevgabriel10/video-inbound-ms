import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://admin:admin@rabbitmq:5672'], // Correct RabbitMQ connection URL
      queue: 'video-inbound-service',
      queueOptions: {
        durable: false
      },
    },
  });
  await app.startAllMicroservices()
  await app.listen(3000);
}
bootstrap();
