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
import { Operatore1WhereUniqueInput } from "./Operatore1WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class Operatore1FindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => Operatore1WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore1WhereUniqueInput)
  @Field(() => Operatore1WhereUniqueInput, { nullable: false })
  where!: Operatore1WhereUniqueInput;
}

export { Operatore1FindUniqueArgs as Operatore1FindUniqueArgs };
