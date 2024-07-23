import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore22Service } from "./operatore22.service";
import { Operatore22ControllerBase } from "./base/operatore22.controller.base";

@swagger.ApiTags("operatore22s")
@common.Controller("operatore22s")
export class Operatore22Controller extends Operatore22ControllerBase {
  constructor(protected readonly service: Operatore22Service) {
    super(service);
  }
}
