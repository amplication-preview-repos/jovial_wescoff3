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
import { Operatore22Service } from "../operatore22.service";
import { Operatore22CreateInput } from "./Operatore22CreateInput";
import { Operatore22 } from "./Operatore22";
import { Operatore22FindManyArgs } from "./Operatore22FindManyArgs";
import { Operatore22WhereUniqueInput } from "./Operatore22WhereUniqueInput";
import { Operatore22UpdateInput } from "./Operatore22UpdateInput";

export class Operatore22ControllerBase {
  constructor(protected readonly service: Operatore22Service) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Operatore22 })
  async createOperatore22(
    @common.Body() data: Operatore22CreateInput
  ): Promise<Operatore22> {
    return await this.service.createOperatore22({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Operatore22] })
  @ApiNestedQuery(Operatore22FindManyArgs)
  async operatore22s(@common.Req() request: Request): Promise<Operatore22[]> {
    const args = plainToClass(Operatore22FindManyArgs, request.query);
    return this.service.operatore22s({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Operatore22 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async operatore22(
    @common.Param() params: Operatore22WhereUniqueInput
  ): Promise<Operatore22 | null> {
    const result = await this.service.operatore22({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        password: true,
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
  @swagger.ApiOkResponse({ type: Operatore22 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOperatore22(
    @common.Param() params: Operatore22WhereUniqueInput,
    @common.Body() data: Operatore22UpdateInput
  ): Promise<Operatore22 | null> {
    try {
      return await this.service.updateOperatore22({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
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
  @swagger.ApiOkResponse({ type: Operatore22 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOperatore22(
    @common.Param() params: Operatore22WhereUniqueInput
  ): Promise<Operatore22 | null> {
    try {
      return await this.service.deleteOperatore22({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          password: true,
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