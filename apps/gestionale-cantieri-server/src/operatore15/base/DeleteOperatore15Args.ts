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
import { Operatore15WhereUniqueInput } from "./Operatore15WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteOperatore15Args {
  @ApiProperty({
    required: true,
    type: () => Operatore15WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore15WhereUniqueInput)
  @Field(() => Operatore15WhereUniqueInput, { nullable: false })
  where!: Operatore15WhereUniqueInput;
}

export { DeleteOperatore15Args as DeleteOperatore15Args };
