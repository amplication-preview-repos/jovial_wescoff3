import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { Operatore14Service } from "./operatore14.service";
import { Operatore14ControllerBase } from "./base/operatore14.controller.base";

@swagger.ApiTags("operatore14s")
@common.Controller("operatore14s")
export class Operatore14Controller extends Operatore14ControllerBase {
  constructor(protected readonly service: Operatore14Service) {
    super(service);
  }
}
