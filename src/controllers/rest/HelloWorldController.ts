import { PathParams } from "@tsed/common";
import {Controller} from "@tsed/di";
import {Get, Returns, Summary} from "@tsed/schema";

@Controller("/hello-world")
export class HelloWorldController {
  @Get("/")
  get() {
    return "hello";
  }
  
  @Get("/suma/:a/:b")
  @Summary("Obtiene la suma de dos numeros")
  @(Returns(200).Description("Obtiene expediente con datos para pago"))
  suma(@PathParams("a") a: number, 
       @PathParams("b") b: number): number {
    try {
      if (a == 1) {
        return this._sumarDosNumeros(a, b);
      }
      return a + b;
    }
    catch (x) {
      x.status = 400;
      throw x;
    }
  }

  aFunction(a:string) {
    if(a!=""){
      return "Hello "+a;
    }
    else
    {
      return "Hello"
    }

    }

  _sumarDosNumeros(a: number, b: number){
    return a + b;
  }
  _division(a: number, b: number){
    return a / b;
  }

  LaPizzaLlevaPiña()
  {
 return true
  }




}


