import {Context} from "@tsed/platform-params";
import {MiddlewareMethods, Middleware} from "@tsed/platform-middlewares";
import { $log } from "@tsed/logger";

@Middleware()
export default class LogMiddleware implements MiddlewareMethods {

  use(@Context() $ctx: Context) {
    $log.info('this is a log middleware, running as the final step');
  }
}