import * as graphql from "@nestjs/graphql";
import { OperatoreResolverBase } from "./base/operatore.resolver.base";
import { Operatore } from "./base/Operatore";
import { OperatoreService } from "./operatore.service";

@graphql.Resolver(() => Operatore)
export class OperatoreResolver extends OperatoreResolverBase {
  constructor(protected readonly service: OperatoreService) {
    super(service);
  }
}
