import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore30Service } from "./operatore30.service";
import { Operatore30ControllerBase } from "./base/operatore30.controller.base";

@swagger.ApiTags("operatore30s")
@common.Controller("operatore30s")
export class Operatore30Controller extends Operatore30ControllerBase {
  constructor(protected readonly service: Operatore30Service) {
    super(service);
  }
}
