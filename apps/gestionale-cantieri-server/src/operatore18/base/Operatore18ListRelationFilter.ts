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
import { Operatore18WhereInput } from "./Operatore18WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore18ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore18WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore18WhereInput)
  @IsOptional()
  @Field(() => Operatore18WhereInput, {
    nullable: true,
  })
  every?: Operatore18WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore18WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore18WhereInput)
  @IsOptional()
  @Field(() => Operatore18WhereInput, {
    nullable: true,
  })
  some?: Operatore18WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore18WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore18WhereInput)
  @IsOptional()
  @Field(() => Operatore18WhereInput, {
    nullable: true,
  })
  none?: Operatore18WhereInput;
}
export { Operatore18ListRelationFilter as Operatore18ListRelationFilter };
