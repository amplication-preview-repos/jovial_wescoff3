import * as graphql from "@nestjs/graphql";
import { Operatore9ResolverBase } from "./base/operatore9.resolver.base";
import { Operatore9 } from "./base/Operatore9";
import { Operatore9Service } from "./operatore9.service";

@graphql.Resolver(() => Operatore9)
export class Operatore9Resolver extends Operatore9ResolverBase {
  constructor(protected readonly service: Operatore9Service) {
    super(service);
  }
}
