import { Module } from "@nestjs/common";
import { Operatore12ModuleBase } from "./base/operatore12.module.base";
import { Operatore12Service } from "./operatore12.service";
import { Operatore12Controller } from "./operatore12.controller";
import { Operatore12Resolver } from "./operatore12.resolver";

@Module({
  imports: [Operatore12ModuleBase],
  controllers: [Operatore12Controller],
  providers: [Operatore12Service, Operatore12Resolver],
  exports: [Operatore12Service],
})
export class Operatore12Module {}
