import { Injectable } from "@tsed/di";
import { $log } from "@tsed/logger";
import { UseCache } from "@tsed/platform-cache";

@Injectable()
export class MyService {
    @UseCache({ key: 'some-provider', canCache: () => true })
    public doSomething = () => {
        $log.info('MyService.doSomething is called');
        return 'test-123';
    }
}