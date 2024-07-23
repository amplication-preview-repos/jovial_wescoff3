import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore24Service } from "./operatore24.service";
import { Operatore24ControllerBase } from "./base/operatore24.controller.base";

@swagger.ApiTags("operatore24s")
@common.Controller("operatore24s")
export class Operatore24Controller extends Operatore24ControllerBase {
  constructor(protected readonly service: Operatore24Service) {
    super(service);
  }
}
