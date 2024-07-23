import { Module } from "@nestjs/common";
import { Operatore20ModuleBase } from "./base/operatore20.module.base";
import { Operatore20Service } from "./operatore20.service";
import { Operatore20Controller } from "./operatore20.controller";
import { Operatore20Resolver } from "./operatore20.resolver";

@Module({
  imports: [Operatore20ModuleBase],
  controllers: [Operatore20Controller],
  providers: [Operatore20Service, Operatore20Resolver],
  exports: [Operatore20Service],
})
export class Operatore20Module {}
