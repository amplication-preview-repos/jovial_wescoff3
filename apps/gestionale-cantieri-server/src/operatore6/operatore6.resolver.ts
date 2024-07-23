import * as graphql from "@nestjs/graphql";
import { Operatore6ResolverBase } from "./base/operatore6.resolver.base";
import { Operatore6 } from "./base/Operatore6";
import { Operatore6Service } from "./operatore6.service";

@graphql.Resolver(() => Operatore6)
export class Operatore6Resolver extends Operatore6ResolverBase {
  constructor(protected readonly service: Operatore6Service) {
    super(service);
  }
}
