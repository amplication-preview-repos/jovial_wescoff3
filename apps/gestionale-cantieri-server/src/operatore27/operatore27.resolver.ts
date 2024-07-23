import * as graphql from "@nestjs/graphql";
import { Operatore27ResolverBase } from "./base/operatore27.resolver.base";
import { Operatore27 } from "./base/Operatore27";
import { Operatore27Service } from "./operatore27.service";

@graphql.Resolver(() => Operatore27)
export class Operatore27Resolver extends Operatore27ResolverBase {
  constructor(protected readonly service: Operatore27Service) {
    super(service);
  }
}
