import * as graphql from "@nestjs/graphql";
import { Operatore30ResolverBase } from "./base/operatore30.resolver.base";
import { Operatore30 } from "./base/Operatore30";
import { Operatore30Service } from "./operatore30.service";

@graphql.Resolver(() => Operatore30)
export class Operatore30Resolver extends Operatore30ResolverBase {
  constructor(protected readonly service: Operatore30Service) {
    super(service);
  }
}
