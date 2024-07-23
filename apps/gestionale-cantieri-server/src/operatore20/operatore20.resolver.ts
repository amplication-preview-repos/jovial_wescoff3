import * as graphql from "@nestjs/graphql";
import { Operatore20ResolverBase } from "./base/operatore20.resolver.base";
import { Operatore20 } from "./base/Operatore20";
import { Operatore20Service } from "./operatore20.service";

@graphql.Resolver(() => Operatore20)
export class Operatore20Resolver extends Operatore20ResolverBase {
  constructor(protected readonly service: Operatore20Service) {
    super(service);
  }
}
