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
import { Operatore2WhereInput } from "./Operatore2WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore2ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore2WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore2WhereInput)
  @IsOptional()
  @Field(() => Operatore2WhereInput, {
    nullable: true,
  })
  every?: Operatore2WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore2WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore2WhereInput)
  @IsOptional()
  @Field(() => Operatore2WhereInput, {
    nullable: true,
  })
  some?: Operatore2WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore2WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore2WhereInput)
  @IsOptional()
  @Field(() => Operatore2WhereInput, {
    nullable: true,
  })
  none?: Operatore2WhereInput;
}
export { Operatore2ListRelationFilter as Operatore2ListRelationFilter };
