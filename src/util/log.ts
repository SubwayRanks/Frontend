export interface ILogger {
  info (msg: any, ...optionalParams: any[]): void;
  warn (msg?: any, ...optionalParams: any[]): void;
  error (msg?: any, ...optionalParams: any[]): void;
}

export class Logger implements ILogger {

  info (msg: any) {
    console.info(msg);
  }

  warn (msg: any) {
    console.warn(msg);
  }

  error (msg: any) {
    console.error(msg);
  }

}
