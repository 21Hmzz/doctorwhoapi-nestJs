import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.url == '/') {
      next();
      return;
    }
    const fs = require('fs');
    const date = new Date().toISOString();
    const log = {
      date: date,
      chemin_demande: req.url,
    };
    const logString = JSON.stringify(log);
    fs.readFile('log.json', 'utf8', (err: any, data: any) => {
      if (err) {
        fs.writeFileSync('log.json', '{"logs": []}');
        data = '{"logs": []}';
      }
      const logData = JSON.parse(data);
      if (!Array.isArray(logData.logs)) {
        logData.logs = [];
      }
      logData.logs.push(log);
      fs.writeFileSync('log.json', JSON.stringify(logData));
    });
    next();
  }
}