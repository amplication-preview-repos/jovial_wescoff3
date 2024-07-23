import * as graphql from "@nestjs/graphql";
import { LavoroResolverBase } from "./base/lavoro.resolver.base";
import { Lavoro } from "./base/Lavoro";
import { LavoroService } from "./lavoro.service";

@graphql.Resolver(() => Lavoro)
export class LavoroResolver extends LavoroResolverBase {
  constructor(protected readonly service: LavoroService) {
    super(service);
  }
}
