import { BaseContext } from "@tsed/di";
import { Context } from "@tsed/platform-params";
import { ResponseFilter, ResponseFilterMethods } from "@tsed/platform-response-filter";
import { Page } from "./models/Page";

@ResponseFilter('application/json')
export class PaginationResponseFilter implements ResponseFilterMethods {
    transform(data, $ctx: Context) {
        if (!($ctx.data instanceof Page)) {
          return data;
        }
    
        if ($ctx.event.request.url) {
            $ctx.response.status(206);
            // I want to modify some content here, but ultimately return the same original data returned by the controller
            return $ctx.data.toResponse($ctx.event.request.url);
        }
    
        return data;
    }
}