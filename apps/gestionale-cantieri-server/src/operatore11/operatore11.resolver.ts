import * as graphql from "@nestjs/graphql";
import { Operatore11ResolverBase } from "./base/operatore11.resolver.base";
import { Operatore11 } from "./base/Operatore11";
import { Operatore11Service } from "./operatore11.service";

@graphql.Resolver(() => Operatore11)
export class Operatore11Resolver extends Operatore11ResolverBase {
  constructor(protected readonly service: Operatore11Service) {
    super(service);
  }
}
