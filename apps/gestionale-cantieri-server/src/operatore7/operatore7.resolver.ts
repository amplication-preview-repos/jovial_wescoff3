import * as graphql from "@nestjs/graphql";
import { Operatore7ResolverBase } from "./base/operatore7.resolver.base";
import { Operatore7 } from "./base/Operatore7";
import { Operatore7Service } from "./operatore7.service";

@graphql.Resolver(() => Operatore7)
export class Operatore7Resolver extends Operatore7ResolverBase {
  constructor(protected readonly service: Operatore7Service) {
    super(service);
  }
}
