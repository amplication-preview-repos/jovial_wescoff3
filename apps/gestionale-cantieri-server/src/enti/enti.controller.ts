import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntiService } from "./enti.service";
import { EntiControllerBase } from "./base/enti.controller.base";

@swagger.ApiTags("entis")
@common.Controller("entis")
export class EntiController extends EntiControllerBase {
  constructor(protected readonly service: EntiService) {
    super(service);
  }
}
