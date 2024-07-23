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
import { Operatore23WhereInput } from "./Operatore23WhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { Operatore23OrderByInput } from "./Operatore23OrderByInput";

@ArgsType()
class Operatore23FindManyArgs {
  @ApiProperty({
    required: false,
    type: () => Operatore23WhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => Operatore23WhereInput, { nullable: true })
  @Type(() => Operatore23WhereInput)
  where?: Operatore23WhereInput;

  @ApiProperty({
    required: false,
    type: [Operatore23OrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [Operatore23OrderByInput], { nullable: true })
  @Type(() => Operatore23OrderByInput)
  orderBy?: Array<Operatore23OrderByInput>;

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

export { Operatore23FindManyArgs as Operatore23FindManyArgs };