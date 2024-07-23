import * as graphql from "@nestjs/graphql";
import { Operatore4ResolverBase } from "./base/operatore4.resolver.base";
import { Operatore4 } from "./base/Operatore4";
import { Operatore4Service } from "./operatore4.service";

@graphql.Resolver(() => Operatore4)
export class Operatore4Resolver extends Operatore4ResolverBase {
  constructor(protected readonly service: Operatore4Service) {
    super(service);
  }
}
