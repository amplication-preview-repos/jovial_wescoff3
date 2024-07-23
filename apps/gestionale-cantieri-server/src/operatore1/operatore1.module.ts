import { Module } from "@nestjs/common";
import { Operatore1ModuleBase } from "./base/operatore1.module.base";
import { Operatore1Service } from "./operatore1.service";
import { Operatore1Controller } from "./operatore1.controller";
import { Operatore1Resolver } from "./operatore1.resolver";

@Module({
  imports: [Operatore1ModuleBase],
  controllers: [Operatore1Controller],
  providers: [Operatore1Service, Operatore1Resolver],
  exports: [Operatore1Service],
})
export class Operatore1Module {}
