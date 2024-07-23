import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore5Service } from "./operatore5.service";
import { Operatore5ControllerBase } from "./base/operatore5.controller.base";

@swagger.ApiTags("operatore5s")
@common.Controller("operatore5s")
export class Operatore5Controller extends Operatore5ControllerBase {
  constructor(protected readonly service: Operatore5Service) {
    super(service);
  }
}
