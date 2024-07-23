/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Operatore14CreateInput } from "./Operatore14CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOperatore14Args {
  @ApiProperty({
    required: true,
    type: () => Operatore14CreateInput,
  })
  @ValidateNested()
  @Type(() => Operatore14CreateInput)
  @Field(() => Operatore14CreateInput, { nullable: false })
  data!: Operatore14CreateInput;
}

export { CreateOperatore14Args as CreateOperatore14Args };
