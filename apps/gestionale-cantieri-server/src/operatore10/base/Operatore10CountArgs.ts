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
import { Operatore10WhereInput } from "./Operatore10WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Operatore10CountArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore10WhereInput,
  })
  @Field(() => Operatore10WhereInput, { nullable: true })
  @Type(() => Operatore10WhereInput)
  where?: Operatore10WhereInput;
}

export { Operatore10CountArgs as Operatore10CountArgs };
