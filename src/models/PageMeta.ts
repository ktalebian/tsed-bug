import { Property } from "@tsed/schema";
import { Id } from "./Id";

export class PageMeta {
    @Property()
    direction: number;
    
    @Property()
    token: Id;
  
    constructor(direction: number, token: Id) {
      this.direction = direction;
      this.token = token;
    }
}