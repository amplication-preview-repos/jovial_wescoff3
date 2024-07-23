import * as graphql from "@nestjs/graphql";
import { Operatore19ResolverBase } from "./base/operatore19.resolver.base";
import { Operatore19 } from "./base/Operatore19";
import { Operatore19Service } from "./operatore19.service";

@graphql.Resolver(() => Operatore19)
export class Operatore19Resolver extends Operatore19ResolverBase {
  constructor(protected readonly service: Operatore19Service) {
    super(service);
  }
}
