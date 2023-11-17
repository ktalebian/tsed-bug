import {Controller} from "@tsed/di";
import { $log } from "@tsed/logger";
import { PathParams } from "@tsed/platform-params";
import {CollectionOf, Get, Returns} from "@tsed/schema";
import { Id } from "src/models/Id";
import { User } from "src/models/User";

class List {
  users: User[];

  constructor() {
    this.users = [];
  }
}

class Collection {
  @CollectionOf(User)
  users: User[];

  constructor() {
    this.users = [];
  }
}

@Controller("/")
export class HelloWorldController {
  @Get("/single")
  get() {
    const user = new User();
    user.id = new Id();
    user.name = 'test';
    
    return user;
  }

  @Get("/object")
  object() {
    const user1 = new User();
    user1.id = new Id();
    user1.name = 'user1';

    const user2 = new User();
    user2.id = new Id();
    user2.name = 'user2';
    
    return {
      user1,user2
    };
  }

  @Get("/list")
  @Returns(200, List)
  list() {
    const user1 = new User();
    user1.id = new Id();
    user1.name = 'user1';

    const user2 = new User();
    user2.id = new Id();
    user2.name = 'user2';

    const list = new List();
    list.users.push(user1);
    list.users.push(user2);
    
    return list;
  }

  @Get("/collection")
  @Returns(200, Collection)
  collection() {
    const user1 = new User();
    user1.id = new Id();
    user1.name = 'user1';

    const user2 = new User();
    user2.id = new Id();
    user2.name = 'user2';

    const collection = new Collection();
    collection.users.push(user1);
    collection.users.push(user2);
    
    return collection;
  }
}
