import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore11Service } from "./operatore11.service";
import { Operatore11ControllerBase } from "./base/operatore11.controller.base";

@swagger.ApiTags("operatore11s")
@common.Controller("operatore11s")
export class Operatore11Controller extends Operatore11ControllerBase {
  constructor(protected readonly service: Operatore11Service) {
    super(service);
  }
}
