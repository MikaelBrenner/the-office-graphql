import { Injectable } from '@nestjs/common';
import { ApiConsumer } from 'src/api-consumer/api-consumer';

@Injectable()
export class EpisodesService {
  constructor(private readonly apiConsumer: ApiConsumer) {}

  getEpisodes() {
    return this.apiConsumer.getEpisodes();
  }
}
