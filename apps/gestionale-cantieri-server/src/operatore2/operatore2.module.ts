import { Module } from "@nestjs/common";
import { Operatore2ModuleBase } from "./base/operatore2.module.base";
import { Operatore2Service } from "./operatore2.service";
import { Operatore2Controller } from "./operatore2.controller";
import { Operatore2Resolver } from "./operatore2.resolver";

@Module({
  imports: [Operatore2ModuleBase],
  controllers: [Operatore2Controller],
  providers: [Operatore2Service, Operatore2Resolver],
  exports: [Operatore2Service],
})
export class Operatore2Module {}
