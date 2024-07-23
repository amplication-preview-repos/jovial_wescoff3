import * as graphql from "@nestjs/graphql";
import { Operatore18ResolverBase } from "./base/operatore18.resolver.base";
import { Operatore18 } from "./base/Operatore18";
import { Operatore18Service } from "./operatore18.service";

@graphql.Resolver(() => Operatore18)
export class Operatore18Resolver extends Operatore18ResolverBase {
  constructor(protected readonly service: Operatore18Service) {
    super(service);
  }
}
