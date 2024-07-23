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
import { Operatore7CreateInput } from "./Operatore7CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOperatore7Args {
  @ApiProperty({
    required: true,
    type: () => Operatore7CreateInput,
  })
  @ValidateNested()
  @Type(() => Operatore7CreateInput)
  @Field(() => Operatore7CreateInput, { nullable: false })
  data!: Operatore7CreateInput;
}

export { CreateOperatore7Args as CreateOperatore7Args };