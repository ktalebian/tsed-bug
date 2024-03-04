import {Controller, Inject} from "@tsed/di";
import {CollectionOf, Generics, Get, Property, Returns} from "@tsed/schema";
import { Host } from "src/models/Hosts";
import { Id } from "src/models/Id";
import { Page } from "src/models/Page";
import { PageMeta } from "src/models/PageMeta";
import { MyService } from "src/services/MyService";


@Controller("/")
export class HelloWorldController {
  @Inject()
  myService: MyService;

  @Get("/cache")
  @Returns(200, String)
  async cache() {
    return this.myService.doSomething();
  }
}
