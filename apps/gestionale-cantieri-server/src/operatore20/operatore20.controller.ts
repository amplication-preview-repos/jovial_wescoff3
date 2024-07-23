import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore20Service } from "./operatore20.service";
import { Operatore20ControllerBase } from "./base/operatore20.controller.base";

@swagger.ApiTags("operatore20s")
@common.Controller("operatore20s")
export class Operatore20Controller extends Operatore20ControllerBase {
  constructor(protected readonly service: Operatore20Service) {
    super(service);
  }
}
