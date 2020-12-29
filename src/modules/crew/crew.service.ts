import { Injectable } from '@nestjs/common';
import { ApiConsumer } from 'src/api-consumer/api-consumer';

@Injectable()
export class CrewService {
  constructor(private readonly apiConsumer: ApiConsumer) {}

  getCrew() {
    return this.apiConsumer.getCrew();
  }
}
