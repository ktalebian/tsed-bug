import { useDecorators } from "@tsed/core";
import { Id } from "./Id";
import { Property } from "@tsed/schema";
import { OnDeserialize, OnSerialize } from "@tsed/json-mapper";


function IdProperty() {
  return useDecorators(
    Property(String),
    OnDeserialize((id) => {
      console.log('OnDeserialize', id)
      if (id) {
          return new Id(id);
      }
    }),
    OnSerialize((id) => {
      console.log('onSerialize', id)
      if (id) {
        return id.getValue();
      }

      return null;
    }),
  );
}
  

export class User {
    @IdProperty()
    id: Id;

    @Property()
    name: string;
}