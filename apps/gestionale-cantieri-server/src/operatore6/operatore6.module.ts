import { Module } from "@nestjs/common";
import { Operatore6ModuleBase } from "./base/operatore6.module.base";
import { Operatore6Service } from "./operatore6.service";
import { Operatore6Controller } from "./operatore6.controller";
import { Operatore6Resolver } from "./operatore6.resolver";

@Module({
  imports: [Operatore6ModuleBase],
  controllers: [Operatore6Controller],
  providers: [Operatore6Service, Operatore6Resolver],
  exports: [Operatore6Service],
})
export class Operatore6Module {}
