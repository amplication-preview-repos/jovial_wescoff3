import * as graphql from "@nestjs/graphql";
import { Operatore21ResolverBase } from "./base/operatore21.resolver.base";
import { Operatore21 } from "./base/Operatore21";
import { Operatore21Service } from "./operatore21.service";

@graphql.Resolver(() => Operatore21)
export class Operatore21Resolver extends Operatore21ResolverBase {
  constructor(protected readonly service: Operatore21Service) {
    super(service);
  }
}
