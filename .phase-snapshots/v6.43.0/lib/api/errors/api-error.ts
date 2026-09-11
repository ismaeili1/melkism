export class ApiException extends Error {

  public readonly code: string;

  public readonly statusCode: number;


  constructor(
    code:string,
    message:string,
    statusCode:number = 500
  ){

    super(message);

    this.code = code;

    this.statusCode = statusCode;

    this.name = "ApiException";

  }

}


