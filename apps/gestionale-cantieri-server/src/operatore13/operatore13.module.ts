import { Module } from "@nestjs/common";
import { Operatore13ModuleBase } from "./base/operatore13.module.base";
import { Operatore13Service } from "./operatore13.service";
import { Operatore13Controller } from "./operatore13.controller";
import { Operatore13Resolver } from "./operatore13.resolver";

@Module({
  imports: [Operatore13ModuleBase],
  controllers: [Operatore13Controller],
  providers: [Operatore13Service, Operatore13Resolver],
  exports: [Operatore13Service],
})
export class Operatore13Module {}
