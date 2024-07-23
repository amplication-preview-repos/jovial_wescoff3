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
import { Operatore5CreateInput } from "./Operatore5CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOperatore5Args {
  @ApiProperty({
    required: true,
    type: () => Operatore5CreateInput,
  })
  @ValidateNested()
  @Type(() => Operatore5CreateInput)
  @Field(() => Operatore5CreateInput, { nullable: false })
  data!: Operatore5CreateInput;
}

export { CreateOperatore5Args as CreateOperatore5Args };