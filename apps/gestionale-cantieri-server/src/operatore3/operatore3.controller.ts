import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore3Service } from "./operatore3.service";
import { Operatore3ControllerBase } from "./base/operatore3.controller.base";

@swagger.ApiTags("operatore3s")
@common.Controller("operatore3s")
export class Operatore3Controller extends Operatore3ControllerBase {
  constructor(protected readonly service: Operatore3Service) {
    super(service);
  }
}
