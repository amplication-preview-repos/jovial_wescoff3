import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore27Service } from "./operatore27.service";
import { Operatore27ControllerBase } from "./base/operatore27.controller.base";

@swagger.ApiTags("operatore27s")
@common.Controller("operatore27s")
export class Operatore27Controller extends Operatore27ControllerBase {
  constructor(protected readonly service: Operatore27Service) {
    super(service);
  }
}
