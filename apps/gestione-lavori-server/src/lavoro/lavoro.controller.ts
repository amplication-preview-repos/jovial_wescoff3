import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LavoroService } from "./lavoro.service";
import { LavoroControllerBase } from "./base/lavoro.controller.base";

@swagger.ApiTags("lavoros")
@common.Controller("lavoros")
export class LavoroController extends LavoroControllerBase {
  constructor(protected readonly service: LavoroService) {
    super(service);
  }
}
