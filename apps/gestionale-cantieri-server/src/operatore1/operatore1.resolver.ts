import * as graphql from "@nestjs/graphql";
import { Operatore1ResolverBase } from "./base/operatore1.resolver.base";
import { Operatore1 } from "./base/Operatore1";
import { Operatore1Service } from "./operatore1.service";

@graphql.Resolver(() => Operatore1)
export class Operatore1Resolver extends Operatore1ResolverBase {
  constructor(protected readonly service: Operatore1Service) {
    super(service);
  }
}
