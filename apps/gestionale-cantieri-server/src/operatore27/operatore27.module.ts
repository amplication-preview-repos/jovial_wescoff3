import { Module } from "@nestjs/common";
import { Operatore27ModuleBase } from "./base/operatore27.module.base";
import { Operatore27Service } from "./operatore27.service";
import { Operatore27Controller } from "./operatore27.controller";
import { Operatore27Resolver } from "./operatore27.resolver";

@Module({
  imports: [Operatore27ModuleBase],
  controllers: [Operatore27Controller],
  providers: [Operatore27Service, Operatore27Resolver],
  exports: [Operatore27Service],
})
export class Operatore27Module {}
