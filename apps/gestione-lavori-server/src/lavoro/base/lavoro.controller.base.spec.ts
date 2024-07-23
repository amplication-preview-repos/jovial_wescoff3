import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { LavoroController } from "../lavoro.controller";
import { LavoroService } from "../lavoro.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  titolo: "exampleTitolo",
  descrizione: "exampleDescrizione",
  dataInizio: new Date(),
  dataFine: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  titolo: "exampleTitolo",
  descrizione: "exampleDescrizione",
  dataInizio: new Date(),
  dataFine: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    titolo: "exampleTitolo",
    descrizione: "exampleDescrizione",
    dataInizio: new Date(),
    dataFine: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  titolo: "exampleTitolo",
  descrizione: "exampleDescrizione",
  dataInizio: new Date(),
  dataFine: new Date(),
};

const service = {
  createLavoro() {
    return CREATE_RESULT;
  },
  lavoros: () => FIND_MANY_RESULT,
  lavoro: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Lavoro", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: LavoroService,
          useValue: service,
        },
      ],
      controllers: [LavoroController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /lavoros", async () => {
    await request(app.getHttpServer())
      .post("/lavoros")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dataInizio: CREATE_RESULT.dataInizio.toISOString(),
        dataFine: CREATE_RESULT.dataFine.toISOString(),
      });
  });

  test("GET /lavoros", async () => {
    await request(app.getHttpServer())
      .get("/lavoros")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          dataInizio: FIND_MANY_RESULT[0].dataInizio.toISOString(),
          dataFine: FIND_MANY_RESULT[0].dataFine.toISOString(),
        },
      ]);
  });

  test("GET /lavoros/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lavoros"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /lavoros/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/lavoros"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        dataInizio: FIND_ONE_RESULT.dataInizio.toISOString(),
        dataFine: FIND_ONE_RESULT.dataFine.toISOString(),
      });
  });

  test("POST /lavoros existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/lavoros")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        dataInizio: CREATE_RESULT.dataInizio.toISOString(),
        dataFine: CREATE_RESULT.dataFine.toISOString(),
      })
      .then(function () {
        agent
          .post("/lavoros")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
