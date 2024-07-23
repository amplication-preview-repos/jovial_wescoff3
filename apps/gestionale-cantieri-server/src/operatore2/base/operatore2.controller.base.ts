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
import { Operatore2Service } from "../operatore2.service";
import { Operatore2CreateInput } from "./Operatore2CreateInput";
import { Operatore2 } from "./Operatore2";
import { Operatore2FindManyArgs } from "./Operatore2FindManyArgs";
import { Operatore2WhereUniqueInput } from "./Operatore2WhereUniqueInput";
import { Operatore2UpdateInput } from "./Operatore2UpdateInput";

export class Operatore2ControllerBase {
  constructor(protected readonly service: Operatore2Service) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Operatore2 })
  async createOperatore2(
    @common.Body() data: Operatore2CreateInput
  ): Promise<Operatore2> {
    return await this.service.createOperatore2({
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
  @swagger.ApiOkResponse({ type: [Operatore2] })
  @ApiNestedQuery(Operatore2FindManyArgs)
  async operatore2s(@common.Req() request: Request): Promise<Operatore2[]> {
    const args = plainToClass(Operatore2FindManyArgs, request.query);
    return this.service.operatore2s({
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
  @swagger.ApiOkResponse({ type: Operatore2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async operatore2(
    @common.Param() params: Operatore2WhereUniqueInput
  ): Promise<Operatore2 | null> {
    const result = await this.service.operatore2({
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
  @swagger.ApiOkResponse({ type: Operatore2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOperatore2(
    @common.Param() params: Operatore2WhereUniqueInput,
    @common.Body() data: Operatore2UpdateInput
  ): Promise<Operatore2 | null> {
    try {
      return await this.service.updateOperatore2({
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
  @swagger.ApiOkResponse({ type: Operatore2 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOperatore2(
    @common.Param() params: Operatore2WhereUniqueInput
  ): Promise<Operatore2 | null> {
    try {
      return await this.service.deleteOperatore2({
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