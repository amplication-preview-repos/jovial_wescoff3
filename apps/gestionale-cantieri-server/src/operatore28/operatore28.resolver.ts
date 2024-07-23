import * as graphql from "@nestjs/graphql";
import { Operatore28ResolverBase } from "./base/operatore28.resolver.base";
import { Operatore28 } from "./base/Operatore28";
import { Operatore28Service } from "./operatore28.service";

@graphql.Resolver(() => Operatore28)
export class Operatore28Resolver extends Operatore28ResolverBase {
  constructor(protected readonly service: Operatore28Service) {
    super(service);
  }
}
