import * as graphql from "@nestjs/graphql";
import { Operatore25ResolverBase } from "./base/operatore25.resolver.base";
import { Operatore25 } from "./base/Operatore25";
import { Operatore25Service } from "./operatore25.service";

@graphql.Resolver(() => Operatore25)
export class Operatore25Resolver extends Operatore25ResolverBase {
  constructor(protected readonly service: Operatore25Service) {
    super(service);
  }
}
