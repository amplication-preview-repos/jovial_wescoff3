import { Module } from "@nestjs/common";
import { Operatore30ModuleBase } from "./base/operatore30.module.base";
import { Operatore30Service } from "./operatore30.service";
import { Operatore30Controller } from "./operatore30.controller";
import { Operatore30Resolver } from "./operatore30.resolver";

@Module({
  imports: [Operatore30ModuleBase],
  controllers: [Operatore30Controller],
  providers: [Operatore30Service, Operatore30Resolver],
  exports: [Operatore30Service],
})
export class Operatore30Module {}
