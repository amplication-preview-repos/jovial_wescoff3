import { Module } from "@nestjs/common";
import { CantieriModule } from "./cantieri/cantieri.module";
import { LavorazioniModule } from "./lavorazioni/lavorazioni.module";
import { OperatoreModule } from "./operatore/operatore.module";
import { EntiModule } from "./enti/enti.module";
import { Operatore2Module } from "./operatore2/operatore2.module";
import { Operatore1Module } from "./operatore1/operatore1.module";
import { Operatore4Module } from "./operatore4/operatore4.module";
import { Operatore3Module } from "./operatore3/operatore3.module";
import { Operatore20Module } from "./operatore20/operatore20.module";
import { Operatore19Module } from "./operatore19/operatore19.module";
import { Operatore26Module } from "./operatore26/operatore26.module";
import { Operatore30Module } from "./operatore30/operatore30.module";
import { Operatore27Module } from "./operatore27/operatore27.module";
import { Operatore22Module } from "./operatore22/operatore22.module";
import { Operatore23Module } from "./operatore23/operatore23.module";
import { Operatore5Module } from "./operatore5/operatore5.module";
import { Operatore29Module } from "./operatore29/operatore29.module";
import { Operatore28Module } from "./operatore28/operatore28.module";
import { Operatore6Module } from "./operatore6/operatore6.module";
import { Operatore21Module } from "./operatore21/operatore21.module";
import { Operatore15Module } from "./operatore15/operatore15.module";
import { Operatore25Module } from "./operatore25/operatore25.module";
import { Operatore24Module } from "./operatore24/operatore24.module";
import { Operatore18Module } from "./operatore18/operatore18.module";
import { Operatore16Module } from "./operatore16/operatore16.module";
import { Operatore13Module } from "./operatore13/operatore13.module";
import { Operatore9Module } from "./operatore9/operatore9.module";
import { Operatore7Module } from "./operatore7/operatore7.module";
import { Operatore10Module } from "./operatore10/operatore10.module";
import { Operatore8Module } from "./operatore8/operatore8.module";
import { Operatore14Module } from "./operatore14/operatore14.module";
import { Operatore12Module } from "./operatore12/operatore12.module";
import { Operatore17Module } from "./operatore17/operatore17.module";
import { Operatore11Module } from "./operatore11/operatore11.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CantieriModule,
    LavorazioniModule,
    OperatoreModule,
    EntiModule,
    Operatore2Module,
    Operatore1Module,
    Operatore4Module,
    Operatore3Module,
    Operatore20Module,
    Operatore19Module,
    Operatore26Module,
    Operatore30Module,
    Operatore27Module,
    Operatore22Module,
    Operatore23Module,
    Operatore5Module,
    Operatore29Module,
    Operatore28Module,
    Operatore6Module,
    Operatore21Module,
    Operatore15Module,
    Operatore25Module,
    Operatore24Module,
    Operatore18Module,
    Operatore16Module,
    Operatore13Module,
    Operatore9Module,
    Operatore7Module,
    Operatore10Module,
    Operatore8Module,
    Operatore14Module,
    Operatore12Module,
    Operatore17Module,
    Operatore11Module,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
