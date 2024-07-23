import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore9Service } from "./operatore9.service";
import { Operatore9ControllerBase } from "./base/operatore9.controller.base";

@swagger.ApiTags("operatore9s")
@common.Controller("operatore9s")
export class Operatore9Controller extends Operatore9ControllerBase {
  constructor(protected readonly service: Operatore9Service) {
    super(service);
  }
}
