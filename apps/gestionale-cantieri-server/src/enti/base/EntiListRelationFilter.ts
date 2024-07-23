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
import { EntiWhereInput } from "./EntiWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class EntiListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => EntiWhereInput,
  })
  @ValidateNested()
  @Type(() => EntiWhereInput)
  @IsOptional()
  @Field(() => EntiWhereInput, {
    nullable: true,
  })
  every?: EntiWhereInput;

  @ApiProperty({
    required: false,
    type: () => EntiWhereInput,
  })
  @ValidateNested()
  @Type(() => EntiWhereInput)
  @IsOptional()
  @Field(() => EntiWhereInput, {
    nullable: true,
  })
  some?: EntiWhereInput;

  @ApiProperty({
    required: false,
    type: () => EntiWhereInput,
  })
  @ValidateNested()
  @Type(() => EntiWhereInput)
  @IsOptional()
  @Field(() => EntiWhereInput, {
    nullable: true,
  })
  none?: EntiWhereInput;
}
export { EntiListRelationFilter as EntiListRelationFilter };
