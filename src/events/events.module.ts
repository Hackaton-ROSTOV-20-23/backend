import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { PrismaService } from '@/common/services';

@Module({
  providers: [EventsService, PrismaService],
  controllers: [EventsController],
})
export class EventsModule {}
