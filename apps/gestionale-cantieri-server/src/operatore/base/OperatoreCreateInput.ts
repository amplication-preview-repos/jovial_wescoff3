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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { LavorazioniCreateNestedManyWithoutOperatoresInput } from "./LavorazioniCreateNestedManyWithoutOperatoresInput";
import { Type } from "class-transformer";

@InputType()
class OperatoreCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  nome?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  cognome?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => LavorazioniCreateNestedManyWithoutOperatoresInput,
  })
  @ValidateNested()
  @Type(() => LavorazioniCreateNestedManyWithoutOperatoresInput)
  @IsOptional()
  @Field(() => LavorazioniCreateNestedManyWithoutOperatoresInput, {
    nullable: true,
  })
  lavorazionis?: LavorazioniCreateNestedManyWithoutOperatoresInput;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  permessiSpeciali?: boolean | null;
}

export { OperatoreCreateInput as OperatoreCreateInput };
