import * as graphql from "@nestjs/graphql";
import { Operatore10ResolverBase } from "./base/operatore10.resolver.base";
import { Operatore10 } from "./base/Operatore10";
import { Operatore10Service } from "./operatore10.service";

@graphql.Resolver(() => Operatore10)
export class Operatore10Resolver extends Operatore10ResolverBase {
  constructor(protected readonly service: Operatore10Service) {
    super(service);
  }
}
