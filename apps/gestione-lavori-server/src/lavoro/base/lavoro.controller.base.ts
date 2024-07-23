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
import { LavoroService } from "../lavoro.service";
import { LavoroCreateInput } from "./LavoroCreateInput";
import { Lavoro } from "./Lavoro";
import { LavoroFindManyArgs } from "./LavoroFindManyArgs";
import { LavoroWhereUniqueInput } from "./LavoroWhereUniqueInput";
import { LavoroUpdateInput } from "./LavoroUpdateInput";

export class LavoroControllerBase {
  constructor(protected readonly service: LavoroService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Lavoro })
  async createLavoro(@common.Body() data: LavoroCreateInput): Promise<Lavoro> {
    return await this.service.createLavoro({
      data: {
        ...data,

        cliente: data.cliente
          ? {
              connect: data.cliente,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        titolo: true,
        descrizione: true,
        dataInizio: true,
        dataFine: true,

        cliente: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Lavoro] })
  @ApiNestedQuery(LavoroFindManyArgs)
  async lavoros(@common.Req() request: Request): Promise<Lavoro[]> {
    const args = plainToClass(LavoroFindManyArgs, request.query);
    return this.service.lavoros({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        titolo: true,
        descrizione: true,
        dataInizio: true,
        dataFine: true,

        cliente: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Lavoro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async lavoro(
    @common.Param() params: LavoroWhereUniqueInput
  ): Promise<Lavoro | null> {
    const result = await this.service.lavoro({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        titolo: true,
        descrizione: true,
        dataInizio: true,
        dataFine: true,

        cliente: {
          select: {
            id: true,
          },
        },
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
  @swagger.ApiOkResponse({ type: Lavoro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateLavoro(
    @common.Param() params: LavoroWhereUniqueInput,
    @common.Body() data: LavoroUpdateInput
  ): Promise<Lavoro | null> {
    try {
      return await this.service.updateLavoro({
        where: params,
        data: {
          ...data,

          cliente: data.cliente
            ? {
                connect: data.cliente,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          titolo: true,
          descrizione: true,
          dataInizio: true,
          dataFine: true,

          cliente: {
            select: {
              id: true,
            },
          },
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
  @swagger.ApiOkResponse({ type: Lavoro })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteLavoro(
    @common.Param() params: LavoroWhereUniqueInput
  ): Promise<Lavoro | null> {
    try {
      return await this.service.deleteLavoro({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          titolo: true,
          descrizione: true,
          dataInizio: true,
          dataFine: true,

          cliente: {
            select: {
              id: true,
            },
          },
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