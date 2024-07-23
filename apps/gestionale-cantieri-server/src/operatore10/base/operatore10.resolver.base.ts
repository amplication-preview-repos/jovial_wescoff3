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
import { Operatore10 } from "./Operatore10";
import { Operatore10CountArgs } from "./Operatore10CountArgs";
import { Operatore10FindManyArgs } from "./Operatore10FindManyArgs";
import { Operatore10FindUniqueArgs } from "./Operatore10FindUniqueArgs";
import { CreateOperatore10Args } from "./CreateOperatore10Args";
import { UpdateOperatore10Args } from "./UpdateOperatore10Args";
import { DeleteOperatore10Args } from "./DeleteOperatore10Args";
import { Operatore10Service } from "../operatore10.service";
@graphql.Resolver(() => Operatore10)
export class Operatore10ResolverBase {
  constructor(protected readonly service: Operatore10Service) {}

  async _operatore10sMeta(
    @graphql.Args() args: Operatore10CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore10])
  async operatore10s(
    @graphql.Args() args: Operatore10FindManyArgs
  ): Promise<Operatore10[]> {
    return this.service.operatore10s(args);
  }

  @graphql.Query(() => Operatore10, { nullable: true })
  async operatore10(
    @graphql.Args() args: Operatore10FindUniqueArgs
  ): Promise<Operatore10 | null> {
    const result = await this.service.operatore10(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore10)
  async createOperatore10(
    @graphql.Args() args: CreateOperatore10Args
  ): Promise<Operatore10> {
    return await this.service.createOperatore10({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore10)
  async updateOperatore10(
    @graphql.Args() args: UpdateOperatore10Args
  ): Promise<Operatore10 | null> {
    try {
      return await this.service.updateOperatore10({
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

  @graphql.Mutation(() => Operatore10)
  async deleteOperatore10(
    @graphql.Args() args: DeleteOperatore10Args
  ): Promise<Operatore10 | null> {
    try {
      return await this.service.deleteOperatore10(args);
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