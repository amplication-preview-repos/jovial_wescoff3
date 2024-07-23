import { Module } from "@nestjs/common";
import { Operatore23ModuleBase } from "./base/operatore23.module.base";
import { Operatore23Service } from "./operatore23.service";
import { Operatore23Controller } from "./operatore23.controller";
import { Operatore23Resolver } from "./operatore23.resolver";

@Module({
  imports: [Operatore23ModuleBase],
  controllers: [Operatore23Controller],
  providers: [Operatore23Service, Operatore23Resolver],
  exports: [Operatore23Service],
})
export class Operatore23Module {}
