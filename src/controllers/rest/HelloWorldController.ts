import {Controller} from "@tsed/di";
import { $log } from "@tsed/logger";
import {Get} from "@tsed/schema";
import { PipeContext, Trasformed } from "src/PipeTransform";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  // change the result type to any to fix
  get(@PipeContext() result: Trasformed) {
    $log.info('pipeContext', result);
    return "hello";
  }
}
