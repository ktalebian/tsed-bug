import { useDecorators } from "@tsed/core";
import { $log } from "@tsed/logger";
import { Injectable, PipeMethods, RawQueryParams, UsePipe } from '@tsed/common';

export class Trasformed {
  public params: Record<string, string>;
}

@Injectable()
export class PipeTransform implements PipeMethods<Record<string, string>, Trasformed> {

  transform(params: Record<string, string>): Trasformed {
    $log.info('queryParams', params);

    const t = new Trasformed();
    t.params = params;

    return t;
  }
}

export function PipeContext() {
  // @ts-ignore
  return useDecorators(RawQueryParams(), UsePipe(PipeTransform));
}