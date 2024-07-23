import { Module } from "@nestjs/common";
import { Operatore29ModuleBase } from "./base/operatore29.module.base";
import { Operatore29Service } from "./operatore29.service";
import { Operatore29Controller } from "./operatore29.controller";
import { Operatore29Resolver } from "./operatore29.resolver";

@Module({
  imports: [Operatore29ModuleBase],
  controllers: [Operatore29Controller],
  providers: [Operatore29Service, Operatore29Resolver],
  exports: [Operatore29Service],
})
export class Operatore29Module {}
