import { Module } from '@nestjs/common';
import { BundlesModule } from './bundles/bundles.module';

@Module({
  imports: [BundlesModule],
})
export class AppModule {}
