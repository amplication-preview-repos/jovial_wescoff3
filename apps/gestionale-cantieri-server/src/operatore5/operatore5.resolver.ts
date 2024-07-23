import * as graphql from "@nestjs/graphql";
import { Operatore5ResolverBase } from "./base/operatore5.resolver.base";
import { Operatore5 } from "./base/Operatore5";
import { Operatore5Service } from "./operatore5.service";

@graphql.Resolver(() => Operatore5)
export class Operatore5Resolver extends Operatore5ResolverBase {
  constructor(protected readonly service: Operatore5Service) {
    super(service);
  }
}
