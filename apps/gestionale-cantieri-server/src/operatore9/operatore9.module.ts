import { Module } from "@nestjs/common";
import { Operatore9ModuleBase } from "./base/operatore9.module.base";
import { Operatore9Service } from "./operatore9.service";
import { Operatore9Controller } from "./operatore9.controller";
import { Operatore9Resolver } from "./operatore9.resolver";

@Module({
  imports: [Operatore9ModuleBase],
  controllers: [Operatore9Controller],
  providers: [Operatore9Service, Operatore9Resolver],
  exports: [Operatore9Service],
})
export class Operatore9Module {}
