import { Module } from "@nestjs/common";
import { Operatore14ModuleBase } from "./base/operatore14.module.base";
import { Operatore14Service } from "./operatore14.service";
import { Operatore14Controller } from "./operatore14.controller";
import { Operatore14Resolver } from "./operatore14.resolver";

@Module({
  imports: [Operatore14ModuleBase],
  controllers: [Operatore14Controller],
  providers: [Operatore14Service, Operatore14Resolver],
  exports: [Operatore14Service],
})
export class Operatore14Module {}
