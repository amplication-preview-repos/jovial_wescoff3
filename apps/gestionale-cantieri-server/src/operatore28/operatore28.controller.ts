import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore28Service } from "./operatore28.service";
import { Operatore28ControllerBase } from "./base/operatore28.controller.base";

@swagger.ApiTags("operatore28s")
@common.Controller("operatore28s")
export class Operatore28Controller extends Operatore28ControllerBase {
  constructor(protected readonly service: Operatore28Service) {
    super(service);
  }
}
