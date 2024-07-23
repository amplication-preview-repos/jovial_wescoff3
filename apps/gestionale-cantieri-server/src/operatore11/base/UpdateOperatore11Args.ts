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
import { Operatore11WhereUniqueInput } from "./Operatore11WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Operatore11UpdateInput } from "./Operatore11UpdateInput";

@ArgsType()
class UpdateOperatore11Args {
  @ApiProperty({
    required: true,
    type: () => Operatore11WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Operatore11WhereUniqueInput)
  @Field(() => Operatore11WhereUniqueInput, { nullable: false })
  where!: Operatore11WhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => Operatore11UpdateInput,
  })
  @ValidateNested()
  @Type(() => Operatore11UpdateInput)
  @Field(() => Operatore11UpdateInput, { nullable: false })
  data!: Operatore11UpdateInput;
}

export { UpdateOperatore11Args as UpdateOperatore11Args };
