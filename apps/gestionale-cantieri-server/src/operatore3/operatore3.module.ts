import { Module } from "@nestjs/common";
import { Operatore3ModuleBase } from "./base/operatore3.module.base";
import { Operatore3Service } from "./operatore3.service";
import { Operatore3Controller } from "./operatore3.controller";
import { Operatore3Resolver } from "./operatore3.resolver";

@Module({
  imports: [Operatore3ModuleBase],
  controllers: [Operatore3Controller],
  providers: [Operatore3Service, Operatore3Resolver],
  exports: [Operatore3Service],
})
export class Operatore3Module {}
