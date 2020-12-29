import { Injectable } from '@nestjs/common';
import { ApiConsumer } from 'src/api-consumer/api-consumer';

@Injectable()
export class CharactersService {
  constructor(private readonly apiConsumer: ApiConsumer) {}

  getCharacters() {
    return this.apiConsumer.getCharacters();
  }
}
