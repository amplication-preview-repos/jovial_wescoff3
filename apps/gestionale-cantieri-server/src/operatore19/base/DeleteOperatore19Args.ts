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
import { Operatore19WhereUniqueInput } from "./Operatore19WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOperatore19Args {
  @ApiProperty({
    required: true,
    type: () => Operatore19WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore19WhereUniqueInput)
  @Field(() => Operatore19WhereUniqueInput, { nullable: false })
  where!: Operatore19WhereUniqueInput;
}

export { DeleteOperatore19Args as DeleteOperatore19Args };