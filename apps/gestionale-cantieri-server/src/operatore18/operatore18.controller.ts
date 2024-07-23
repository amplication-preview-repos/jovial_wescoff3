import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore18Service } from "./operatore18.service";
import { Operatore18ControllerBase } from "./base/operatore18.controller.base";

@swagger.ApiTags("operatore18s")
@common.Controller("operatore18s")
export class Operatore18Controller extends Operatore18ControllerBase {
  constructor(protected readonly service: Operatore18Service) {
    super(service);
  }
}
