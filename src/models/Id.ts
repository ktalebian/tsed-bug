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