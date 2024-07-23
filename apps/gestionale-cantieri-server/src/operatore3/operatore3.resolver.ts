import * as graphql from "@nestjs/graphql";
import { Operatore3ResolverBase } from "./base/operatore3.resolver.base";
import { Operatore3 } from "./base/Operatore3";
import { Operatore3Service } from "./operatore3.service";

@graphql.Resolver(() => Operatore3)
export class Operatore3Resolver extends Operatore3ResolverBase {
  constructor(protected readonly service: Operatore3Service) {
    super(service);
  }
}
