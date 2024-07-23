import * as graphql from "@nestjs/graphql";
import { Operatore26ResolverBase } from "./base/operatore26.resolver.base";
import { Operatore26 } from "./base/Operatore26";
import { Operatore26Service } from "./operatore26.service";

@graphql.Resolver(() => Operatore26)
export class Operatore26Resolver extends Operatore26ResolverBase {
  constructor(protected readonly service: Operatore26Service) {
    super(service);
  }
}
