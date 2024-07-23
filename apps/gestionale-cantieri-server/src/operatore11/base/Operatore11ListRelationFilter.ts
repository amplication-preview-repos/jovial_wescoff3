/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Operatore11WhereInput } from "./Operatore11WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore11ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore11WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore11WhereInput)
  @IsOptional()
  @Field(() => Operatore11WhereInput, {
    nullable: true,
  })
  every?: Operatore11WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore11WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore11WhereInput)
  @IsOptional()
  @Field(() => Operatore11WhereInput, {
    nullable: true,
  })
  some?: Operatore11WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore11WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore11WhereInput)
  @IsOptional()
  @Field(() => Operatore11WhereInput, {
    nullable: true,
  })
  none?: Operatore11WhereInput;
}
export { Operatore11ListRelationFilter as Operatore11ListRelationFilter };