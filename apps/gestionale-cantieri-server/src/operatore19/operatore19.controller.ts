import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore19Service } from "./operatore19.service";
import { Operatore19ControllerBase } from "./base/operatore19.controller.base";

@swagger.ApiTags("operatore19s")
@common.Controller("operatore19s")
export class Operatore19Controller extends Operatore19ControllerBase {
  constructor(protected readonly service: Operatore19Service) {
    super(service);
  }
}
