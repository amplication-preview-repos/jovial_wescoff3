import { Module } from "@nestjs/common";
import { Operatore22ModuleBase } from "./base/operatore22.module.base";
import { Operatore22Service } from "./operatore22.service";
import { Operatore22Controller } from "./operatore22.controller";
import { Operatore22Resolver } from "./operatore22.resolver";

@Module({
  imports: [Operatore22ModuleBase],
  controllers: [Operatore22Controller],
  providers: [Operatore22Service, Operatore22Resolver],
  exports: [Operatore22Service],
})
export class Operatore22Module {}
