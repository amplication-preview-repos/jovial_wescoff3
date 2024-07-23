import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore13Service } from "./operatore13.service";
import { Operatore13ControllerBase } from "./base/operatore13.controller.base";

@swagger.ApiTags("operatore13s")
@common.Controller("operatore13s")
export class Operatore13Controller extends Operatore13ControllerBase {
  constructor(protected readonly service: Operatore13Service) {
    super(service);
  }
}
