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
import { Operatore26WhereInput } from "./Operatore26WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore26ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore26WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore26WhereInput)
  @IsOptional()
  @Field(() => Operatore26WhereInput, {
    nullable: true,
  })
  every?: Operatore26WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore26WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore26WhereInput)
  @IsOptional()
  @Field(() => Operatore26WhereInput, {
    nullable: true,
  })
  some?: Operatore26WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore26WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore26WhereInput)
  @IsOptional()
  @Field(() => Operatore26WhereInput, {
    nullable: true,
  })
  none?: Operatore26WhereInput;
}
export { Operatore26ListRelationFilter as Operatore26ListRelationFilter };
