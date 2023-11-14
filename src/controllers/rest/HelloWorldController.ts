import {Controller} from "@tsed/di";
import { $log } from "@tsed/logger";
import { PathParams } from "@tsed/platform-params";
import {Get} from "@tsed/schema";
import { Id } from "src/models/Id";
import { User } from "src/models/User";

@Controller("/users")
export class HelloWorldController {
  @Get("/get")
  get() {
    const user = new User();
    user.id = new Id();
    user.name = 'test';
    
    return user;
  }

  @Get("/list")
  list() {
    const user1 = new User();
    user1.id = new Id();
    user1.name = 'user1';

    const user2 = new User();
    user2.id = new Id();
    user2.name = 'user2';
    
    return {
      user1,
      user2,
    };
  }
}
