import { Module } from "@nestjs/common";
import { Operatore21ModuleBase } from "./base/operatore21.module.base";
import { Operatore21Service } from "./operatore21.service";
import { Operatore21Controller } from "./operatore21.controller";
import { Operatore21Resolver } from "./operatore21.resolver";

@Module({
  imports: [Operatore21ModuleBase],
  controllers: [Operatore21Controller],
  providers: [Operatore21Service, Operatore21Resolver],
  exports: [Operatore21Service],
})
export class Operatore21Module {}
