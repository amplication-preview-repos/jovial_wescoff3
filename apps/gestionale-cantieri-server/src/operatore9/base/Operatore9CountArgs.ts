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
import { Operatore9WhereInput } from "./Operatore9WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Operatore9CountArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore9WhereInput,
  })
  @Field(() => Operatore9WhereInput, { nullable: true })
  @Type(() => Operatore9WhereInput)
  where?: Operatore9WhereInput;
}

export { Operatore9CountArgs as Operatore9CountArgs };
