/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Operatore29 } from "./Operatore29";
import { Operatore29CountArgs } from "./Operatore29CountArgs";
import { Operatore29FindManyArgs } from "./Operatore29FindManyArgs";
import { Operatore29FindUniqueArgs } from "./Operatore29FindUniqueArgs";
import { CreateOperatore29Args } from "./CreateOperatore29Args";
import { UpdateOperatore29Args } from "./UpdateOperatore29Args";
import { DeleteOperatore29Args } from "./DeleteOperatore29Args";
import { Operatore29Service } from "../operatore29.service";
@graphql.Resolver(() => Operatore29)
export class Operatore29ResolverBase {
  constructor(protected readonly service: Operatore29Service) {}

  async _operatore29sMeta(
    @graphql.Args() args: Operatore29CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore29])
  async operatore29s(
    @graphql.Args() args: Operatore29FindManyArgs
  ): Promise<Operatore29[]> {
    return this.service.operatore29s(args);
  }

  @graphql.Query(() => Operatore29, { nullable: true })
  async operatore29(
    @graphql.Args() args: Operatore29FindUniqueArgs
  ): Promise<Operatore29 | null> {
    const result = await this.service.operatore29(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore29)
  async createOperatore29(
    @graphql.Args() args: CreateOperatore29Args
  ): Promise<Operatore29> {
    return await this.service.createOperatore29({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore29)
  async updateOperatore29(
    @graphql.Args() args: UpdateOperatore29Args
  ): Promise<Operatore29 | null> {
    try {
      return await this.service.updateOperatore29({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Operatore29)
  async deleteOperatore29(
    @graphql.Args() args: DeleteOperatore29Args
  ): Promise<Operatore29 | null> {
    try {
      return await this.service.deleteOperatore29(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}