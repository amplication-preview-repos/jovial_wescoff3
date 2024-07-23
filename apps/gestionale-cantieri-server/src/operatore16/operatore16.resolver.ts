import * as graphql from "@nestjs/graphql";
import { Operatore16ResolverBase } from "./base/operatore16.resolver.base";
import { Operatore16 } from "./base/Operatore16";
import { Operatore16Service } from "./operatore16.service";

@graphql.Resolver(() => Operatore16)
export class Operatore16Resolver extends Operatore16ResolverBase {
  constructor(protected readonly service: Operatore16Service) {
    super(service);
  }
}
