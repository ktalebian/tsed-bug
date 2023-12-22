import {Controller} from "@tsed/di";
import {CollectionOf, Generics, Get, Property, Returns} from "@tsed/schema";
import { Host } from "src/models/Hosts";
import { Id } from "src/models/Id";
import { Page } from "src/models/Page";
import { PageMeta } from "src/models/PageMeta";


@Controller("/")
export class HelloWorldController {
  @Get("/hosts")
  @Returns(200, Page<Host>)
  hosts() {
    const host1 = new Host();
    host1.id = new Id();
    host1.name = 'host1';

    const host2 = new Host();
    host2.id = new Id();
    host2.name = 'host2';

    const meta = new PageMeta(1, host2.id);
    return new Page([host1, host2], meta);
  }
}
