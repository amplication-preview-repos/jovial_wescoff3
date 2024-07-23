import * as graphql from "@nestjs/graphql";
import { CantieriResolverBase } from "./base/cantieri.resolver.base";
import { Cantieri } from "./base/Cantieri";
import { CantieriService } from "./cantieri.service";

@graphql.Resolver(() => Cantieri)
export class CantieriResolver extends CantieriResolverBase {
  constructor(protected readonly service: CantieriService) {
    super(service);
  }
}
