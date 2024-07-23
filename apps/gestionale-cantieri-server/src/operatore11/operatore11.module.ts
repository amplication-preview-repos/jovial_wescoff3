import { Module } from "@nestjs/common";
import { Operatore11ModuleBase } from "./base/operatore11.module.base";
import { Operatore11Service } from "./operatore11.service";
import { Operatore11Controller } from "./operatore11.controller";
import { Operatore11Resolver } from "./operatore11.resolver";

@Module({
  imports: [Operatore11ModuleBase],
  controllers: [Operatore11Controller],
  providers: [Operatore11Service, Operatore11Resolver],
  exports: [Operatore11Service],
})
export class Operatore11Module {}
