import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';
import { VideoInboundController } from './interface/VideoInboundController';
import { ThirdPartyServicesModule } from './third-party-services/third-party-services.module';
import { SubscribeNewUserUseCase } from './application/use-cases/SubscribeNewUser';

@Module({
  imports: [InfrastructureModule, DomainModule, ApplicationModule, ThirdPartyServicesModule],
  controllers: [VideoInboundController],
  providers: [SubscribeNewUserUseCase],
})
export class AppModule {}
