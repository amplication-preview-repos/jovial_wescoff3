import { Module } from "@nestjs/common";
import { Operatore10ModuleBase } from "./base/operatore10.module.base";
import { Operatore10Service } from "./operatore10.service";
import { Operatore10Controller } from "./operatore10.controller";
import { Operatore10Resolver } from "./operatore10.resolver";

@Module({
  imports: [Operatore10ModuleBase],
  controllers: [Operatore10Controller],
  providers: [Operatore10Service, Operatore10Resolver],
  exports: [Operatore10Service],
})
export class Operatore10Module {}
