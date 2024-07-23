import * as graphql from "@nestjs/graphql";
import { Operatore8ResolverBase } from "./base/operatore8.resolver.base";
import { Operatore8 } from "./base/Operatore8";
import { Operatore8Service } from "./operatore8.service";

@graphql.Resolver(() => Operatore8)
export class Operatore8Resolver extends Operatore8ResolverBase {
  constructor(protected readonly service: Operatore8Service) {
    super(service);
  }
}
