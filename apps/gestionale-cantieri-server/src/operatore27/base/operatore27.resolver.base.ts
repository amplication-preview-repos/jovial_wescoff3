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
import { Operatore27 } from "./Operatore27";
import { Operatore27CountArgs } from "./Operatore27CountArgs";
import { Operatore27FindManyArgs } from "./Operatore27FindManyArgs";
import { Operatore27FindUniqueArgs } from "./Operatore27FindUniqueArgs";
import { CreateOperatore27Args } from "./CreateOperatore27Args";
import { UpdateOperatore27Args } from "./UpdateOperatore27Args";
import { DeleteOperatore27Args } from "./DeleteOperatore27Args";
import { Operatore27Service } from "../operatore27.service";
@graphql.Resolver(() => Operatore27)
export class Operatore27ResolverBase {
  constructor(protected readonly service: Operatore27Service) {}

  async _operatore27sMeta(
    @graphql.Args() args: Operatore27CountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore27])
  async operatore27s(
    @graphql.Args() args: Operatore27FindManyArgs
  ): Promise<Operatore27[]> {
    return this.service.operatore27s(args);
  }

  @graphql.Query(() => Operatore27, { nullable: true })
  async operatore27(
    @graphql.Args() args: Operatore27FindUniqueArgs
  ): Promise<Operatore27 | null> {
    const result = await this.service.operatore27(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore27)
  async createOperatore27(
    @graphql.Args() args: CreateOperatore27Args
  ): Promise<Operatore27> {
    return await this.service.createOperatore27({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore27)
  async updateOperatore27(
    @graphql.Args() args: UpdateOperatore27Args
  ): Promise<Operatore27 | null> {
    try {
      return await this.service.updateOperatore27({
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

  @graphql.Mutation(() => Operatore27)
  async deleteOperatore27(
    @graphql.Args() args: DeleteOperatore27Args
  ): Promise<Operatore27 | null> {
    try {
      return await this.service.deleteOperatore27(args);
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
