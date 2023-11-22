import { Id, IdProperty } from "./Id";
import { Property } from "@tsed/schema";
  
export class Host {
    @IdProperty()
    id: Id;

    @Property()
    name: string;
}