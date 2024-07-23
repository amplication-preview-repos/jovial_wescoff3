import { Module } from "@nestjs/common";
import { Operatore26ModuleBase } from "./base/operatore26.module.base";
import { Operatore26Service } from "./operatore26.service";
import { Operatore26Controller } from "./operatore26.controller";
import { Operatore26Resolver } from "./operatore26.resolver";

@Module({
  imports: [Operatore26ModuleBase],
  controllers: [Operatore26Controller],
  providers: [Operatore26Service, Operatore26Resolver],
  exports: [Operatore26Service],
})
export class Operatore26Module {}
