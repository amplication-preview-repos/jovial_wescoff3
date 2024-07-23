import * as graphql from "@nestjs/graphql";
import { Operatore2ResolverBase } from "./base/operatore2.resolver.base";
import { Operatore2 } from "./base/Operatore2";
import { Operatore2Service } from "./operatore2.service";

@graphql.Resolver(() => Operatore2)
export class Operatore2Resolver extends Operatore2ResolverBase {
  constructor(protected readonly service: Operatore2Service) {
    super(service);
  }
}
