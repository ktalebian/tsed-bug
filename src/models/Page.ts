import { CollectionOf, Generics, Property } from "@tsed/schema";
import { PageMeta } from "./PageMeta";

@Generics('T')
export class Page<T> {
  @CollectionOf('T')
  @Property()
  list: T[];

  @Property()
  metadata: PageMeta;

  constructor(items: T[], meta: PageMeta) {
    this.list = items;
    this.metadata = meta;
  }

  public toResponse(url: string): Page<T> {
    // ultimately return a new version of Page
    return new Page(this.list, this.metadata);
  }
}