import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore6Service } from "./operatore6.service";
import { Operatore6ControllerBase } from "./base/operatore6.controller.base";

@swagger.ApiTags("operatore6s")
@common.Controller("operatore6s")
export class Operatore6Controller extends Operatore6ControllerBase {
  constructor(protected readonly service: Operatore6Service) {
    super(service);
  }
}
