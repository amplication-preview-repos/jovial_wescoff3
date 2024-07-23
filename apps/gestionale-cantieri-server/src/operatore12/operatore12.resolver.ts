import * as graphql from "@nestjs/graphql";
import { Operatore12ResolverBase } from "./base/operatore12.resolver.base";
import { Operatore12 } from "./base/Operatore12";
import { Operatore12Service } from "./operatore12.service";

@graphql.Resolver(() => Operatore12)
export class Operatore12Resolver extends Operatore12ResolverBase {
  constructor(protected readonly service: Operatore12Service) {
    super(service);
  }
}
