import * as graphql from "@nestjs/graphql";
import { EntiResolverBase } from "./base/enti.resolver.base";
import { Enti } from "./base/Enti";
import { EntiService } from "./enti.service";

@graphql.Resolver(() => Enti)
export class EntiResolver extends EntiResolverBase {
  constructor(protected readonly service: EntiService) {
    super(service);
  }
}
