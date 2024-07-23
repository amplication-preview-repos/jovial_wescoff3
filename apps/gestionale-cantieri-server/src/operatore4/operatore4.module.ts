import { Module } from "@nestjs/common";
import { Operatore4ModuleBase } from "./base/operatore4.module.base";
import { Operatore4Service } from "./operatore4.service";
import { Operatore4Controller } from "./operatore4.controller";
import { Operatore4Resolver } from "./operatore4.resolver";

@Module({
  imports: [Operatore4ModuleBase],
  controllers: [Operatore4Controller],
  providers: [Operatore4Service, Operatore4Resolver],
  exports: [Operatore4Service],
})
export class Operatore4Module {}
