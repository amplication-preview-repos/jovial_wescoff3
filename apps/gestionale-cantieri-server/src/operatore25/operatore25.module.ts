import { Module } from "@nestjs/common";
import { Operatore25ModuleBase } from "./base/operatore25.module.base";
import { Operatore25Service } from "./operatore25.service";
import { Operatore25Controller } from "./operatore25.controller";
import { Operatore25Resolver } from "./operatore25.resolver";

@Module({
  imports: [Operatore25ModuleBase],
  controllers: [Operatore25Controller],
  providers: [Operatore25Service, Operatore25Resolver],
  exports: [Operatore25Service],
})
export class Operatore25Module {}
