import {Controller} from "@tsed/di";
import { PathParams } from "@tsed/platform-params";
import {Get, Returns} from "@tsed/schema";
import { userInfo } from "os";
import { Host } from "src/models/Hosts";
import { Id } from "src/models/Id";
import { User } from "src/models/User";

class PageMeta {
  direction: number;
  token: Id;

  constructor(direction: number, token: Id) {
    this.direction = direction;
    this.token = token;
  }
}

class Page<T> {
  list: T[];
  metadata: PageMeta;

  constructor(items: T[], meta: PageMeta) {
    this.list = items;
    this.metadata = meta;
  }
}

@Controller("/")
export class HelloWorldController {
  @Get("/single")
  @Returns(200, User)
  get() {
    const user = new User();
    user.id = new Id();
    user.name = 'test';
    
    return user;
  }

  @Get("/users")
  @Returns(200, Page)
  users() {
    const user1 = new User();
    user1.id = new Id();
    user1.name = 'user1';

    const user2 = new User();
    user2.id = new Id();
    user2.name = 'user2';

    const meta = new PageMeta(1, user2.id);
    return new Page([user1, user2], meta);
  }

  @Get("/hosts")
  @Returns(200, Page)
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
