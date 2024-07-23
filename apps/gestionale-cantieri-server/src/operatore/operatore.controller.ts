import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OperatoreService } from "./operatore.service";
import { OperatoreControllerBase } from "./base/operatore.controller.base";

@swagger.ApiTags("operatores")
@common.Controller("operatores")
export class OperatoreController extends OperatoreControllerBase {
  constructor(protected readonly service: OperatoreService) {
    super(service);
  }
}
