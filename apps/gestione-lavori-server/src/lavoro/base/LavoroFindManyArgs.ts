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
import { LavoroWhereInput } from "./LavoroWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { LavoroOrderByInput } from "./LavoroOrderByInput";

@ArgsType()
class LavoroFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LavoroWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => LavoroWhereInput, { nullable: true })
  @Type(() => LavoroWhereInput)
  where?: LavoroWhereInput;

  @ApiProperty({
    required: false,
    type: [LavoroOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [LavoroOrderByInput], { nullable: true })
  @Type(() => LavoroOrderByInput)
  orderBy?: Array<LavoroOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LavoroFindManyArgs as LavoroFindManyArgs };
