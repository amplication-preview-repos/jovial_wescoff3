import * as graphql from "@nestjs/graphql";
import { Operatore23ResolverBase } from "./base/operatore23.resolver.base";
import { Operatore23 } from "./base/Operatore23";
import { Operatore23Service } from "./operatore23.service";

@graphql.Resolver(() => Operatore23)
export class Operatore23Resolver extends Operatore23ResolverBase {
  constructor(protected readonly service: Operatore23Service) {
    super(service);
  }
}
