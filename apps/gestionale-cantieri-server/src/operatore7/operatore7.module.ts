import { Module } from "@nestjs/common";
import { Operatore7ModuleBase } from "./base/operatore7.module.base";
import { Operatore7Service } from "./operatore7.service";
import { Operatore7Controller } from "./operatore7.controller";
import { Operatore7Resolver } from "./operatore7.resolver";

@Module({
  imports: [Operatore7ModuleBase],
  controllers: [Operatore7Controller],
  providers: [Operatore7Service, Operatore7Resolver],
  exports: [Operatore7Service],
})
export class Operatore7Module {}
