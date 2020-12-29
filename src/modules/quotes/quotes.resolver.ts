import { Query, Resolver } from '@nestjs/graphql';
import { Quote } from './entities/quote.entity';
import { QuotesService } from './quotes.service';

@Resolver(() => Quote)
export class QuotesResolver {
  constructor(private readonly quotesService: QuotesService) {}

  @Query(() => [Quote], { name: 'quotes', nullable: true })
  getQuotes() {
    return this.quotesService.getQuotes();
  }
}
