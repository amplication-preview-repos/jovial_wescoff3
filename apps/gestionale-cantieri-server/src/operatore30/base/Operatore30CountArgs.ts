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
import { Operatore30WhereInput } from "./Operatore30WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Operatore30CountArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore30WhereInput,
  })
  @Field(() => Operatore30WhereInput, { nullable: true })
  @Type(() => Operatore30WhereInput)
  where?: Operatore30WhereInput;
}

export { Operatore30CountArgs as Operatore30CountArgs };
