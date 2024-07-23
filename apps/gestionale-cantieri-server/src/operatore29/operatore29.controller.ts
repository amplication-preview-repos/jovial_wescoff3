import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore29Service } from "./operatore29.service";
import { Operatore29ControllerBase } from "./base/operatore29.controller.base";

@swagger.ApiTags("operatore29s")
@common.Controller("operatore29s")
export class Operatore29Controller extends Operatore29ControllerBase {
  constructor(protected readonly service: Operatore29Service) {
    super(service);
  }
}
