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
import { Operatore23CreateInput } from "./Operatore23CreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateOperatore23Args {
  @ApiProperty({
    required: true,
    type: () => Operatore23CreateInput,
  })
  @ValidateNested()
  @Type(() => Operatore23CreateInput)
  @Field(() => Operatore23CreateInput, { nullable: false })
  data!: Operatore23CreateInput;
}

export { CreateOperatore23Args as CreateOperatore23Args };