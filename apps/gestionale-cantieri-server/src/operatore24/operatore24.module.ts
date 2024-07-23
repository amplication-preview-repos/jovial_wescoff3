import { Module } from "@nestjs/common";
import { Operatore24ModuleBase } from "./base/operatore24.module.base";
import { Operatore24Service } from "./operatore24.service";
import { Operatore24Controller } from "./operatore24.controller";
import { Operatore24Resolver } from "./operatore24.resolver";

@Module({
  imports: [Operatore24ModuleBase],
  controllers: [Operatore24Controller],
  providers: [Operatore24Service, Operatore24Resolver],
  exports: [Operatore24Service],
})
export class Operatore24Module {}
