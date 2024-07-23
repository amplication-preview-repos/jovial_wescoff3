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
import { Operatore22WhereUniqueInput } from "./Operatore22WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class Operatore22FindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => Operatore22WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore22WhereUniqueInput)
  @Field(() => Operatore22WhereUniqueInput, { nullable: false })
  where!: Operatore22WhereUniqueInput;
}

export { Operatore22FindUniqueArgs as Operatore22FindUniqueArgs };