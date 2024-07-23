import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LavorazioniService } from "./lavorazioni.service";
import { LavorazioniControllerBase } from "./base/lavorazioni.controller.base";

@swagger.ApiTags("lavorazionis")
@common.Controller("lavorazionis")
export class LavorazioniController extends LavorazioniControllerBase {
  constructor(protected readonly service: LavorazioniService) {
    super(service);
  }
}
