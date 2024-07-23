import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore7Service } from "./operatore7.service";
import { Operatore7ControllerBase } from "./base/operatore7.controller.base";

@swagger.ApiTags("operatore7s")
@common.Controller("operatore7s")
export class Operatore7Controller extends Operatore7ControllerBase {
  constructor(protected readonly service: Operatore7Service) {
    super(service);
  }
}
