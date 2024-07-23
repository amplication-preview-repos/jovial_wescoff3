import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CantieriService } from "./cantieri.service";
import { CantieriControllerBase } from "./base/cantieri.controller.base";

@swagger.ApiTags("cantieris")
@common.Controller("cantieris")
export class CantieriController extends CantieriControllerBase {
  constructor(protected readonly service: CantieriService) {
    super(service);
  }
}
