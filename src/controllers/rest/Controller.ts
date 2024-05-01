import {Controller, Inject} from "@tsed/di";
import { BodyParams } from "@tsed/platform-params";
import {CollectionOf, Generics, Get, MaxLength, MinLength, Post, Property, Returns} from "@tsed/schema";
import { Host } from "src/models/Hosts";
import { Id } from "src/models/Id";
import { Page } from "src/models/Page";
import { PageMeta } from "src/models/PageMeta";
import { MyService } from "src/services/MyService";


class MyRequest {
  @Property()
  @MinLength(10).Error('Title must be at least 10 characters long')
  title: string;
}

@Controller("/")
export class HelloWorldController {
  @Inject()
  myService: MyService;

  @Post("/body")
  @Returns(200, String)
  async cache(@BodyParams() body: MyRequest) {
    return body;
  }
}
