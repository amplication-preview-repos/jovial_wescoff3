import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore17Service } from "./operatore17.service";
import { Operatore17ControllerBase } from "./base/operatore17.controller.base";

@swagger.ApiTags("operatore17s")
@common.Controller("operatore17s")
export class Operatore17Controller extends Operatore17ControllerBase {
  constructor(protected readonly service: Operatore17Service) {
    super(service);
  }
}
