import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore1Service } from "./operatore1.service";
import { Operatore1ControllerBase } from "./base/operatore1.controller.base";

@swagger.ApiTags("operatore1s")
@common.Controller("operatore1s")
export class Operatore1Controller extends Operatore1ControllerBase {
  constructor(protected readonly service: Operatore1Service) {
    super(service);
  }
}
