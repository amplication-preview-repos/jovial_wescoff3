import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore25Service } from "./operatore25.service";
import { Operatore25ControllerBase } from "./base/operatore25.controller.base";

@swagger.ApiTags("operatore25s")
@common.Controller("operatore25s")
export class Operatore25Controller extends Operatore25ControllerBase {
  constructor(protected readonly service: Operatore25Service) {
    super(service);
  }
}
