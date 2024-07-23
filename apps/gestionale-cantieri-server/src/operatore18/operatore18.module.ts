import { Module } from "@nestjs/common";
import { Operatore18ModuleBase } from "./base/operatore18.module.base";
import { Operatore18Service } from "./operatore18.service";
import { Operatore18Controller } from "./operatore18.controller";
import { Operatore18Resolver } from "./operatore18.resolver";

@Module({
  imports: [Operatore18ModuleBase],
  controllers: [Operatore18Controller],
  providers: [Operatore18Service, Operatore18Resolver],
  exports: [Operatore18Service],
})
export class Operatore18Module {}
