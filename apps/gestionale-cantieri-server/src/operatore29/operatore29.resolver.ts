import * as graphql from "@nestjs/graphql";
import { Operatore29ResolverBase } from "./base/operatore29.resolver.base";
import { Operatore29 } from "./base/Operatore29";
import { Operatore29Service } from "./operatore29.service";

@graphql.Resolver(() => Operatore29)
export class Operatore29Resolver extends Operatore29ResolverBase {
  constructor(protected readonly service: Operatore29Service) {
    super(service);
  }
}
