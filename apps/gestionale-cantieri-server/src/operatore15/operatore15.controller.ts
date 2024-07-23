import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore15Service } from "./operatore15.service";
import { Operatore15ControllerBase } from "./base/operatore15.controller.base";

@swagger.ApiTags("operatore15s")
@common.Controller("operatore15s")
export class Operatore15Controller extends Operatore15ControllerBase {
  constructor(protected readonly service: Operatore15Service) {
    super(service);
  }
}
