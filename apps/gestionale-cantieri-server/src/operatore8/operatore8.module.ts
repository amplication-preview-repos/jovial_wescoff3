import { Module } from "@nestjs/common";
import { Operatore8ModuleBase } from "./base/operatore8.module.base";
import { Operatore8Service } from "./operatore8.service";
import { Operatore8Controller } from "./operatore8.controller";
import { Operatore8Resolver } from "./operatore8.resolver";

@Module({
  imports: [Operatore8ModuleBase],
  controllers: [Operatore8Controller],
  providers: [Operatore8Service, Operatore8Resolver],
  exports: [Operatore8Service],
})
export class Operatore8Module {}
