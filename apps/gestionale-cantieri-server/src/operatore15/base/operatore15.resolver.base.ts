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
import { Operatore15 } from "./Operatore15";
import { Operatore15CountArgs } from "./Operatore15CountArgs";
import { Operatore15FindManyArgs } from "./Operatore15FindManyArgs";
import { Operatore15FindUniqueArgs } from "./Operatore15FindUniqueArgs";
import { CreateOperatore15Args } from "./CreateOperatore15Args";
import { UpdateOperatore15Args } from "./UpdateOperatore15Args";
import { DeleteOperatore15Args } from "./DeleteOperatore15Args";
import { Operatore15Service } from "../operatore15.service";
@graphql.Resolver(() => Operatore15)
export class Operatore15ResolverBase {
  constructor(protected readonly service: Operatore15Service) {}

  async _operatore15sMeta(
    @graphql.Args() args: Operatore15CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore15])
  async operatore15s(
    @graphql.Args() args: Operatore15FindManyArgs
  ): Promise<Operatore15[]> {
    return this.service.operatore15s(args);
  }

  @graphql.Query(() => Operatore15, { nullable: true })
  async operatore15(
    @graphql.Args() args: Operatore15FindUniqueArgs
  ): Promise<Operatore15 | null> {
    const result = await this.service.operatore15(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore15)
  async createOperatore15(
    @graphql.Args() args: CreateOperatore15Args
  ): Promise<Operatore15> {
    return await this.service.createOperatore15({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore15)
  async updateOperatore15(
    @graphql.Args() args: UpdateOperatore15Args
  ): Promise<Operatore15 | null> {
    try {
      return await this.service.updateOperatore15({
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

  @graphql.Mutation(() => Operatore15)
  async deleteOperatore15(
    @graphql.Args() args: DeleteOperatore15Args
  ): Promise<Operatore15 | null> {
    try {
      return await this.service.deleteOperatore15(args);
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