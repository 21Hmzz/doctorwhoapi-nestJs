import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getQuery(param: string) {
    return 'Param: ' + param + '!';
  }

  postBody(body: any) {
    return 'Body: ' + JSON.stringify(body) + '!';
  }
}
