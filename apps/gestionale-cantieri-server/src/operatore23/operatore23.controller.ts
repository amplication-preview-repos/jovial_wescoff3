import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore23Service } from "./operatore23.service";
import { Operatore23ControllerBase } from "./base/operatore23.controller.base";

@swagger.ApiTags("operatore23s")
@common.Controller("operatore23s")
export class Operatore23Controller extends Operatore23ControllerBase {
  constructor(protected readonly service: Operatore23Service) {
    super(service);
  }
}
