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
import { Operatore24WhereInput } from "./Operatore24WhereInput";
import { Type } from "class-transformer";

@ArgsType()
class Operatore24CountArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore24WhereInput,
  })
  @Field(() => Operatore24WhereInput, { nullable: true })
  @Type(() => Operatore24WhereInput)
  where?: Operatore24WhereInput;
}

export { Operatore24CountArgs as Operatore24CountArgs };
