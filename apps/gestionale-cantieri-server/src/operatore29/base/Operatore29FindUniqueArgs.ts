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
import { Operatore29WhereUniqueInput } from "./Operatore29WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class Operatore29FindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => Operatore29WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore29WhereUniqueInput)
  @Field(() => Operatore29WhereUniqueInput, { nullable: false })
  where!: Operatore29WhereUniqueInput;
}

export { Operatore29FindUniqueArgs as Operatore29FindUniqueArgs };
