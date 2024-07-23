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
import { Operatore4WhereUniqueInput } from "./Operatore4WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOperatore4Args {
  @ApiProperty({
    required: true,
    type: () => Operatore4WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore4WhereUniqueInput)
  @Field(() => Operatore4WhereUniqueInput, { nullable: false })
  where!: Operatore4WhereUniqueInput;
}

export { DeleteOperatore4Args as DeleteOperatore4Args };
