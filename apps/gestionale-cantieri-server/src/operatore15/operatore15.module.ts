import { Module } from "@nestjs/common";
import { Operatore15ModuleBase } from "./base/operatore15.module.base";
import { Operatore15Service } from "./operatore15.service";
import { Operatore15Controller } from "./operatore15.controller";
import { Operatore15Resolver } from "./operatore15.resolver";

@Module({
  imports: [Operatore15ModuleBase],
  controllers: [Operatore15Controller],
  providers: [Operatore15Service, Operatore15Resolver],
  exports: [Operatore15Service],
})
export class Operatore15Module {}
