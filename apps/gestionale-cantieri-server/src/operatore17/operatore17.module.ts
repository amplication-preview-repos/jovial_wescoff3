import { Module } from "@nestjs/common";
import { Operatore17ModuleBase } from "./base/operatore17.module.base";
import { Operatore17Service } from "./operatore17.service";
import { Operatore17Controller } from "./operatore17.controller";
import { Operatore17Resolver } from "./operatore17.resolver";

@Module({
  imports: [Operatore17ModuleBase],
  controllers: [Operatore17Controller],
  providers: [Operatore17Service, Operatore17Resolver],
  exports: [Operatore17Service],
})
export class Operatore17Module {}
