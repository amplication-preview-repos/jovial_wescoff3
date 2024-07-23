import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore4Service } from "./operatore4.service";
import { Operatore4ControllerBase } from "./base/operatore4.controller.base";

@swagger.ApiTags("operatore4s")
@common.Controller("operatore4s")
export class Operatore4Controller extends Operatore4ControllerBase {
  constructor(protected readonly service: Operatore4Service) {
    super(service);
  }
}
