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
import { Operatore22WhereInput } from "./Operatore22WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Operatore22CountArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore22WhereInput,
  })
  @Field(() => Operatore22WhereInput, { nullable: true })
  @Type(() => Operatore22WhereInput)
  where?: Operatore22WhereInput;
}

export { Operatore22CountArgs as Operatore22CountArgs };