import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore2Service } from "./operatore2.service";
import { Operatore2ControllerBase } from "./base/operatore2.controller.base";

@swagger.ApiTags("operatore2s")
@common.Controller("operatore2s")
export class Operatore2Controller extends Operatore2ControllerBase {
  constructor(protected readonly service: Operatore2Service) {
    super(service);
  }
}
