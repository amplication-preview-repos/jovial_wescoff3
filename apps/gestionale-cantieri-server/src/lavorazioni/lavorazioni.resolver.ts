import * as graphql from "@nestjs/graphql";
import { LavorazioniResolverBase } from "./base/lavorazioni.resolver.base";
import { Lavorazioni } from "./base/Lavorazioni";
import { LavorazioniService } from "./lavorazioni.service";

@graphql.Resolver(() => Lavorazioni)
export class LavorazioniResolver extends LavorazioniResolverBase {
  constructor(protected readonly service: LavorazioniService) {
    super(service);
  }
}
