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
import { Operatore10WhereInput } from "./Operatore10WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Operatore10ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Operatore10WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore10WhereInput)
  @IsOptional()
  @Field(() => Operatore10WhereInput, {
    nullable: true,
  })
  every?: Operatore10WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore10WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore10WhereInput)
  @IsOptional()
  @Field(() => Operatore10WhereInput, {
    nullable: true,
  })
  some?: Operatore10WhereInput;

  @ApiProperty({
    required: false,
    type: () => Operatore10WhereInput,
  })
  @ValidateNested()
  @Type(() => Operatore10WhereInput)
  @IsOptional()
  @Field(() => Operatore10WhereInput, {
    nullable: true,
  })
  none?: Operatore10WhereInput;
}
export { Operatore10ListRelationFilter as Operatore10ListRelationFilter };