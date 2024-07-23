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
import { Operatore8 } from "./Operatore8";
import { Operatore8CountArgs } from "./Operatore8CountArgs";
import { Operatore8FindManyArgs } from "./Operatore8FindManyArgs";
import { Operatore8FindUniqueArgs } from "./Operatore8FindUniqueArgs";
import { CreateOperatore8Args } from "./CreateOperatore8Args";
import { UpdateOperatore8Args } from "./UpdateOperatore8Args";
import { DeleteOperatore8Args } from "./DeleteOperatore8Args";
import { Operatore8Service } from "../operatore8.service";
@graphql.Resolver(() => Operatore8)
export class Operatore8ResolverBase {
  constructor(protected readonly service: Operatore8Service) {}

  async _operatore8sMeta(
    @graphql.Args() args: Operatore8CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore8])
  async operatore8s(
    @graphql.Args() args: Operatore8FindManyArgs
  ): Promise<Operatore8[]> {
    return this.service.operatore8s(args);
  }

  @graphql.Query(() => Operatore8, { nullable: true })
  async operatore8(
    @graphql.Args() args: Operatore8FindUniqueArgs
  ): Promise<Operatore8 | null> {
    const result = await this.service.operatore8(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore8)
  async createOperatore8(
    @graphql.Args() args: CreateOperatore8Args
  ): Promise<Operatore8> {
    return await this.service.createOperatore8({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore8)
  async updateOperatore8(
    @graphql.Args() args: UpdateOperatore8Args
  ): Promise<Operatore8 | null> {
    try {
      return await this.service.updateOperatore8({
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

  @graphql.Mutation(() => Operatore8)
  async deleteOperatore8(
    @graphql.Args() args: DeleteOperatore8Args
  ): Promise<Operatore8 | null> {
    try {
      return await this.service.deleteOperatore8(args);
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
