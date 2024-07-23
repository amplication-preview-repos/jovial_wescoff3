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
import { Operatore7WhereInput } from "./Operatore7WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore7ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore7WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore7WhereInput)
  @IsOptional()
  @Field(() => Operatore7WhereInput, {
    nullable: true,
  })
  every?: Operatore7WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore7WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore7WhereInput)
  @IsOptional()
  @Field(() => Operatore7WhereInput, {
    nullable: true,
  })
  some?: Operatore7WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore7WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore7WhereInput)
  @IsOptional()
  @Field(() => Operatore7WhereInput, {
    nullable: true,
  })
  none?: Operatore7WhereInput;
}
export { Operatore7ListRelationFilter as Operatore7ListRelationFilter };