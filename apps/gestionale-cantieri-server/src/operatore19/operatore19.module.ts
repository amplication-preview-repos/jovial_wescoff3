import { Module } from "@nestjs/common";
import { Operatore19ModuleBase } from "./base/operatore19.module.base";
import { Operatore19Service } from "./operatore19.service";
import { Operatore19Controller } from "./operatore19.controller";
import { Operatore19Resolver } from "./operatore19.resolver";

@Module({
  imports: [Operatore19ModuleBase],
  controllers: [Operatore19Controller],
  providers: [Operatore19Service, Operatore19Resolver],
  exports: [Operatore19Service],
})
export class Operatore19Module {}
