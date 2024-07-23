import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore8Service } from "./operatore8.service";
import { Operatore8ControllerBase } from "./base/operatore8.controller.base";

@swagger.ApiTags("operatore8s")
@common.Controller("operatore8s")
export class Operatore8Controller extends Operatore8ControllerBase {
  constructor(protected readonly service: Operatore8Service) {
    super(service);
  }
}
