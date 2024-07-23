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
import { Operatore22 } from "./Operatore22";
import { Operatore22CountArgs } from "./Operatore22CountArgs";
import { Operatore22FindManyArgs } from "./Operatore22FindManyArgs";
import { Operatore22FindUniqueArgs } from "./Operatore22FindUniqueArgs";
import { CreateOperatore22Args } from "./CreateOperatore22Args";
import { UpdateOperatore22Args } from "./UpdateOperatore22Args";
import { DeleteOperatore22Args } from "./DeleteOperatore22Args";
import { Operatore22Service } from "../operatore22.service";
@graphql.Resolver(() => Operatore22)
export class Operatore22ResolverBase {
  constructor(protected readonly service: Operatore22Service) {}

  async _operatore22sMeta(
    @graphql.Args() args: Operatore22CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore22])
  async operatore22s(
    @graphql.Args() args: Operatore22FindManyArgs
  ): Promise<Operatore22[]> {
    return this.service.operatore22s(args);
  }

  @graphql.Query(() => Operatore22, { nullable: true })
  async operatore22(
    @graphql.Args() args: Operatore22FindUniqueArgs
  ): Promise<Operatore22 | null> {
    const result = await this.service.operatore22(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore22)
  async createOperatore22(
    @graphql.Args() args: CreateOperatore22Args
  ): Promise<Operatore22> {
    return await this.service.createOperatore22({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore22)
  async updateOperatore22(
    @graphql.Args() args: UpdateOperatore22Args
  ): Promise<Operatore22 | null> {
    try {
      return await this.service.updateOperatore22({
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

  @graphql.Mutation(() => Operatore22)
  async deleteOperatore22(
    @graphql.Args() args: DeleteOperatore22Args
  ): Promise<Operatore22 | null> {
    try {
      return await this.service.deleteOperatore22(args);
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