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
import { Operatore25WhereUniqueInput } from "./Operatore25WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOperatore25Args {
  @ApiProperty({
    required: true,
    type: () => Operatore25WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore25WhereUniqueInput)
  @Field(() => Operatore25WhereUniqueInput, { nullable: false })
  where!: Operatore25WhereUniqueInput;
}

export { DeleteOperatore25Args as DeleteOperatore25Args };