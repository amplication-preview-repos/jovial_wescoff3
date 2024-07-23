import * as graphql from "@nestjs/graphql";
import { Operatore13ResolverBase } from "./base/operatore13.resolver.base";
import { Operatore13 } from "./base/Operatore13";
import { Operatore13Service } from "./operatore13.service";

@graphql.Resolver(() => Operatore13)
export class Operatore13Resolver extends Operatore13ResolverBase {
  constructor(protected readonly service: Operatore13Service) {
    super(service);
  }
}
