import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['ideal-mongrel-13008-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aWRlYWwtbW9uZ3JlbC0xMzAwOCRVFAfPjLwlVIsA05BOXDVEOfCV_kDI7SmFRaA',
          password:
            'hNXEpkMZAtHO-aVy_ipsoWGQRB4J0fOLSMfjS01hkjc0lRQ_rNjy9DWwISAtHocNReqwZw==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
