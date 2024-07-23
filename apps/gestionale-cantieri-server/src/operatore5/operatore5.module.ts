import { Module } from "@nestjs/common";
import { Operatore5ModuleBase } from "./base/operatore5.module.base";
import { Operatore5Service } from "./operatore5.service";
import { Operatore5Controller } from "./operatore5.controller";
import { Operatore5Resolver } from "./operatore5.resolver";

@Module({
  imports: [Operatore5ModuleBase],
  controllers: [Operatore5Controller],
  providers: [Operatore5Service, Operatore5Resolver],
  exports: [Operatore5Service],
})
export class Operatore5Module {}
