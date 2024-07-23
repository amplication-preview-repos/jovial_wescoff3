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
import { Operatore27Service } from "../operatore27.service";
import { Operatore27CreateInput } from "./Operatore27CreateInput";
import { Operatore27 } from "./Operatore27";
import { Operatore27FindManyArgs } from "./Operatore27FindManyArgs";
import { Operatore27WhereUniqueInput } from "./Operatore27WhereUniqueInput";
import { Operatore27UpdateInput } from "./Operatore27UpdateInput";

export class Operatore27ControllerBase {
  constructor(protected readonly service: Operatore27Service) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Operatore27 })
  async createOperatore27(
    @common.Body() data: Operatore27CreateInput
  ): Promise<Operatore27> {
    return await this.service.createOperatore27({
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
  @swagger.ApiOkResponse({ type: [Operatore27] })
  @ApiNestedQuery(Operatore27FindManyArgs)
  async operatore27s(@common.Req() request: Request): Promise<Operatore27[]> {
    const args = plainToClass(Operatore27FindManyArgs, request.query);
    return this.service.operatore27s({
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
  @swagger.ApiOkResponse({ type: Operatore27 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async operatore27(
    @common.Param() params: Operatore27WhereUniqueInput
  ): Promise<Operatore27 | null> {
    const result = await this.service.operatore27({
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
  @swagger.ApiOkResponse({ type: Operatore27 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateOperatore27(
    @common.Param() params: Operatore27WhereUniqueInput,
    @common.Body() data: Operatore27UpdateInput
  ): Promise<Operatore27 | null> {
    try {
      return await this.service.updateOperatore27({
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
  @swagger.ApiOkResponse({ type: Operatore27 })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteOperatore27(
    @common.Param() params: Operatore27WhereUniqueInput
  ): Promise<Operatore27 | null> {
    try {
      return await this.service.deleteOperatore27({
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