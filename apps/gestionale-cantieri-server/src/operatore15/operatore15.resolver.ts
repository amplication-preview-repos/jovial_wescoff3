import * as graphql from "@nestjs/graphql";
import { Operatore15ResolverBase } from "./base/operatore15.resolver.base";
import { Operatore15 } from "./base/Operatore15";
import { Operatore15Service } from "./operatore15.service";

@graphql.Resolver(() => Operatore15)
export class Operatore15Resolver extends Operatore15ResolverBase {
  constructor(protected readonly service: Operatore15Service) {
    super(service);
  }
}
