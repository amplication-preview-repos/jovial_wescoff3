import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore26Service } from "./operatore26.service";
import { Operatore26ControllerBase } from "./base/operatore26.controller.base";

@swagger.ApiTags("operatore26s")
@common.Controller("operatore26s")
export class Operatore26Controller extends Operatore26ControllerBase {
  constructor(protected readonly service: Operatore26Service) {
    super(service);
  }
}
