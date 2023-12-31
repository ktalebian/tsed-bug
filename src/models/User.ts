import { Id, IdProperty } from "./Id";
import { Property } from "@tsed/schema";
  
export class User {
    @IdProperty()
    id: Id;

    @Property()
    name: string;
}