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
import { Operatore30 } from "./Operatore30";
import { Operatore30CountArgs } from "./Operatore30CountArgs";
import { Operatore30FindManyArgs } from "./Operatore30FindManyArgs";
import { Operatore30FindUniqueArgs } from "./Operatore30FindUniqueArgs";
import { CreateOperatore30Args } from "./CreateOperatore30Args";
import { UpdateOperatore30Args } from "./UpdateOperatore30Args";
import { DeleteOperatore30Args } from "./DeleteOperatore30Args";
import { Operatore30Service } from "../operatore30.service";
@graphql.Resolver(() => Operatore30)
export class Operatore30ResolverBase {
  constructor(protected readonly service: Operatore30Service) {}

  async _operatore30sMeta(
    @graphql.Args() args: Operatore30CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore30])
  async operatore30s(
    @graphql.Args() args: Operatore30FindManyArgs
  ): Promise<Operatore30[]> {
    return this.service.operatore30s(args);
  }

  @graphql.Query(() => Operatore30, { nullable: true })
  async operatore30(
    @graphql.Args() args: Operatore30FindUniqueArgs
  ): Promise<Operatore30 | null> {
    const result = await this.service.operatore30(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore30)
  async createOperatore30(
    @graphql.Args() args: CreateOperatore30Args
  ): Promise<Operatore30> {
    return await this.service.createOperatore30({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore30)
  async updateOperatore30(
    @graphql.Args() args: UpdateOperatore30Args
  ): Promise<Operatore30 | null> {
    try {
      return await this.service.updateOperatore30({
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

  @graphql.Mutation(() => Operatore30)
  async deleteOperatore30(
    @graphql.Args() args: DeleteOperatore30Args
  ): Promise<Operatore30 | null> {
    try {
      return await this.service.deleteOperatore30(args);
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
