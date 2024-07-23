import * as graphql from "@nestjs/graphql";
import { Operatore22ResolverBase } from "./base/operatore22.resolver.base";
import { Operatore22 } from "./base/Operatore22";
import { Operatore22Service } from "./operatore22.service";

@graphql.Resolver(() => Operatore22)
export class Operatore22Resolver extends Operatore22ResolverBase {
  constructor(protected readonly service: Operatore22Service) {
    super(service);
  }
}
