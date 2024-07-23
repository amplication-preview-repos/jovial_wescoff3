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
import { Operatore } from "./Operatore";
import { OperatoreCountArgs } from "./OperatoreCountArgs";
import { OperatoreFindManyArgs } from "./OperatoreFindManyArgs";
import { OperatoreFindUniqueArgs } from "./OperatoreFindUniqueArgs";
import { CreateOperatoreArgs } from "./CreateOperatoreArgs";
import { UpdateOperatoreArgs } from "./UpdateOperatoreArgs";
import { DeleteOperatoreArgs } from "./DeleteOperatoreArgs";
import { LavorazioniFindManyArgs } from "../../lavorazioni/base/LavorazioniFindManyArgs";
import { Lavorazioni } from "../../lavorazioni/base/Lavorazioni";
import { OperatoreService } from "../operatore.service";
@graphql.Resolver(() => Operatore)
export class OperatoreResolverBase {
  constructor(protected readonly service: OperatoreService) {}

  async _operatoresMeta(
    @graphql.Args() args: OperatoreCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Operatore])
  async operatores(
    @graphql.Args() args: OperatoreFindManyArgs
  ): Promise<Operatore[]> {
    return this.service.operatores(args);
  }

  @graphql.Query(() => Operatore, { nullable: true })
  async operatore(
    @graphql.Args() args: OperatoreFindUniqueArgs
  ): Promise<Operatore | null> {
    const result = await this.service.operatore(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Operatore)
  async createOperatore(
    @graphql.Args() args: CreateOperatoreArgs
  ): Promise<Operatore> {
    return await this.service.createOperatore({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Operatore)
  async updateOperatore(
    @graphql.Args() args: UpdateOperatoreArgs
  ): Promise<Operatore | null> {
    try {
      return await this.service.updateOperatore({
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

  @graphql.Mutation(() => Operatore)
  async deleteOperatore(
    @graphql.Args() args: DeleteOperatoreArgs
  ): Promise<Operatore | null> {
    try {
      return await this.service.deleteOperatore(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Lavorazioni], { name: "lavorazionis" })
  async findLavorazionis(
    @graphql.Parent() parent: Operatore,
    @graphql.Args() args: LavorazioniFindManyArgs
  ): Promise<Lavorazioni[]> {
    const results = await this.service.findLavorazionis(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
