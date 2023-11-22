import { OnDeserialize, OnSerialize } from "@tsed/json-mapper";
import { useDecorators } from "@tsed/core";
import { Property } from "@tsed/schema";
import { v4 as uuid } from 'uuid';

export class Id {
    protected value: string;

    public constructor(id?: string) {
        if (id) {
            this.value = id;
        } else {
            this.value = uuid();
        }
    } 

    public getValue(): string {
        return this.value;
    }
}


export function IdProperty() {
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