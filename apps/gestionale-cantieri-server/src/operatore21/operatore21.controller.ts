import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore21Service } from "./operatore21.service";
import { Operatore21ControllerBase } from "./base/operatore21.controller.base";

@swagger.ApiTags("operatore21s")
@common.Controller("operatore21s")
export class Operatore21Controller extends Operatore21ControllerBase {
  constructor(protected readonly service: Operatore21Service) {
    super(service);
  }
}
