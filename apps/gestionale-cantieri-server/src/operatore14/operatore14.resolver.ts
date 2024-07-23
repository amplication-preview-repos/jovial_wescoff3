import * as graphql from "@nestjs/graphql";
import { Operatore14ResolverBase } from "./base/operatore14.resolver.base";
import { Operatore14 } from "./base/Operatore14";
import { Operatore14Service } from "./operatore14.service";

@graphql.Resolver(() => Operatore14)
export class Operatore14Resolver extends Operatore14ResolverBase {
  constructor(protected readonly service: Operatore14Service) {
    super(service);
  }
}
