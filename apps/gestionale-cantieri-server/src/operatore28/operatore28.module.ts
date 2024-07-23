import { Module } from "@nestjs/common";
import { Operatore28ModuleBase } from "./base/operatore28.module.base";
import { Operatore28Service } from "./operatore28.service";
import { Operatore28Controller } from "./operatore28.controller";
import { Operatore28Resolver } from "./operatore28.resolver";

@Module({
  imports: [Operatore28ModuleBase],
  controllers: [Operatore28Controller],
  providers: [Operatore28Service, Operatore28Resolver],
  exports: [Operatore28Service],
})
export class Operatore28Module {}
