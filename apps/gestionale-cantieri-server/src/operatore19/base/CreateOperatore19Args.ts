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
import { Operatore19CreateInput } from "./Operatore19CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOperatore19Args {
  @ApiProperty({
    required: true,
    type: () => Operatore19CreateInput,
  })
  @ValidateNested()
  @Type(() => Operatore19CreateInput)
  @Field(() => Operatore19CreateInput, { nullable: false })
  data!: Operatore19CreateInput;
}

export { CreateOperatore19Args as CreateOperatore19Args };