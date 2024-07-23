import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore12Service } from "./operatore12.service";
import { Operatore12ControllerBase } from "./base/operatore12.controller.base";

@swagger.ApiTags("operatore12s")
@common.Controller("operatore12s")
export class Operatore12Controller extends Operatore12ControllerBase {
  constructor(protected readonly service: Operatore12Service) {
    super(service);
  }
}
