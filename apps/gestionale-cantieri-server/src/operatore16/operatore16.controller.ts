import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore16Service } from "./operatore16.service";
import { Operatore16ControllerBase } from "./base/operatore16.controller.base";

@swagger.ApiTags("operatore16s")
@common.Controller("operatore16s")
export class Operatore16Controller extends Operatore16ControllerBase {
  constructor(protected readonly service: Operatore16Service) {
    super(service);
  }
}
