import * as graphql from "@nestjs/graphql";
import { Operatore24ResolverBase } from "./base/operatore24.resolver.base";
import { Operatore24 } from "./base/Operatore24";
import { Operatore24Service } from "./operatore24.service";

@graphql.Resolver(() => Operatore24)
export class Operatore24Resolver extends Operatore24ResolverBase {
  constructor(protected readonly service: Operatore24Service) {
    super(service);
  }
}
