import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore10Service } from "./operatore10.service";
import { Operatore10ControllerBase } from "./base/operatore10.controller.base";

@swagger.ApiTags("operatore10s")
@common.Controller("operatore10s")
export class Operatore10Controller extends Operatore10ControllerBase {
  constructor(protected readonly service: Operatore10Service) {
    super(service);
  }
}
