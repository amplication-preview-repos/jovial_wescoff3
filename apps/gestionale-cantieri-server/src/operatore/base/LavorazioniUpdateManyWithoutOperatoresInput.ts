/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { LavorazioniWhereUniqueInput } from "../../lavorazioni/base/LavorazioniWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class LavorazioniUpdateManyWithoutOperatoresInput {
  @Field(() => [LavorazioniWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LavorazioniWhereUniqueInput],
  })
  connect?: Array<LavorazioniWhereUniqueInput>;

  @Field(() => [LavorazioniWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LavorazioniWhereUniqueInput],
  })
  disconnect?: Array<LavorazioniWhereUniqueInput>;

  @Field(() => [LavorazioniWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [LavorazioniWhereUniqueInput],
  })
  set?: Array<LavorazioniWhereUniqueInput>;
}

export { LavorazioniUpdateManyWithoutOperatoresInput as LavorazioniUpdateManyWithoutOperatoresInput };