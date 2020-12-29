import { Injectable } from '@nestjs/common';
import { ApiConsumer } from 'src/api-consumer/api-consumer';

@Injectable()
export class QuotesService {
  constructor(private readonly apiConsumer: ApiConsumer) {}

  getQuotes() {
    return this.apiConsumer.getQuotes();
  }
}
