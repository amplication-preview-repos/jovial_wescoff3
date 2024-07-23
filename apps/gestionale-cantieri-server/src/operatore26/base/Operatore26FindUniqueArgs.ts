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
import { Operatore26WhereUniqueInput } from "./Operatore26WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class Operatore26FindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => Operatore26WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore26WhereUniqueInput)
  @Field(() => Operatore26WhereUniqueInput, { nullable: false })
  where!: Operatore26WhereUniqueInput;
}

export { Operatore26FindUniqueArgs as Operatore26FindUniqueArgs };
