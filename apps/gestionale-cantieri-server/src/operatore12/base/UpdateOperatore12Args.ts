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
import { Operatore12WhereUniqueInput } from "./Operatore12WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Operatore12UpdateInput } from "./Operatore12UpdateInput";

@ArgsType()
class UpdateOperatore12Args {
  @ApiProperty({
    required: true,
    type: () => Operatore12WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore12WhereUniqueInput)
  @Field(() => Operatore12WhereUniqueInput, { nullable: false })
  where!: Operatore12WhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => Operatore12UpdateInput,
  })
  @ValidateNested()
  @Type(() => Operatore12UpdateInput)
  @Field(() => Operatore12UpdateInput, { nullable: false })
  data!: Operatore12UpdateInput;
}

export { UpdateOperatore12Args as UpdateOperatore12Args };
