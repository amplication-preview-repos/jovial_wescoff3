/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { Operatore9Service } from "../operatore9.service";
import { Operatore9CreateInput } from "./Operatore9CreateInput";
import { Operatore9 } from "./Operatore9";
import { Operatore9FindManyArgs } from "./Operatore9FindManyArgs";
import { Operatore9WhereUniqueInput } from "./Operatore9WhereUniqueInput";
import { Operatore9UpdateInput } from "./Operatore9UpdateInput";

export class Operatore9ControllerBase {
  constructor(protected readonly service: Operatore9Service) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Operatore9 })
  async createOperatore9(
    @common.Body() data: Operatore9CreateInput
  ): Promise<Operatore9> {
    return await this.service.createOperatore9({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        permessiSpeciali: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Operatore9] })
  @ApiNestedQuery(Operatore9FindManyArgs)
  async operatore9s(@common.Req() request: Request): Promise<Operatore9[]> {
    const args = plainToClass(Operatore9FindManyArgs, request.query);
    return this.service.operatore9s({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        permessiSpeciali: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Operatore9 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async operatore9(
    @common.Param() params: Operatore9WhereUniqueInput
  ): Promise<Operatore9 | null> {
    const result = await this.service.operatore9({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
        permessiSpeciali: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Operatore9 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOperatore9(
    @common.Param() params: Operatore9WhereUniqueInput,
    @common.Body() data: Operatore9UpdateInput
  ): Promise<Operatore9 | null> {
    try {
      return await this.service.updateOperatore9({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
          permessiSpeciali: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Operatore9 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOperatore9(
    @common.Param() params: Operatore9WhereUniqueInput
  ): Promise<Operatore9 | null> {
    try {
      return await this.service.deleteOperatore9({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
          permessiSpeciali: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}