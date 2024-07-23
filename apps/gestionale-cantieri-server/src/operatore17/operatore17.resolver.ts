import * as graphql from "@nestjs/graphql";
import { Operatore17ResolverBase } from "./base/operatore17.resolver.base";
import { Operatore17 } from "./base/Operatore17";
import { Operatore17Service } from "./operatore17.service";

@graphql.Resolver(() => Operatore17)
export class Operatore17Resolver extends Operatore17ResolverBase {
  constructor(protected readonly service: Operatore17Service) {
    super(service);
  }
}
