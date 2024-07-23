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
import { Operatore20WhereInput } from "./Operatore20WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore20ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore20WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore20WhereInput)
  @IsOptional()
  @Field(() => Operatore20WhereInput, {
    nullable: true,
  })
  every?: Operatore20WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore20WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore20WhereInput)
  @IsOptional()
  @Field(() => Operatore20WhereInput, {
    nullable: true,
  })
  some?: Operatore20WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore20WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore20WhereInput)
  @IsOptional()
  @Field(() => Operatore20WhereInput, {
    nullable: true,
  })
  none?: Operatore20WhereInput;
}
export { Operatore20ListRelationFilter as Operatore20ListRelationFilter };