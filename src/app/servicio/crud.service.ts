import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Empleado} from './Empleado';

@Injectable({
  providedIn: 'root'
})

//// class
export class CrudService {
  // constante para trabajar con la api creada por nosotros
  API: string='http://localhost/empleados/'; // API de php crud http://localhost/empleados/
  constructor(private clientHttp:HttpClient) { }

  // metodo o funcion para insertar datos a la base de datos
  AgregarEmpleado(datosEmpleado:Empleado):Observable<any>{
    return this.clientHttp.post(this.API+"?insertar=1", datosEmpleado);
  }
  // metodo o function para obetener datos o mostrar los datos
  ObtenerEmpleados(){
    return this.clientHttp.get(this.API);
  }

  BorrarEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?borrar="+id);
  }

  ObtenerEmpleado(id:any):Observable<any>{
    return this.clientHttp.get(this.API+"?consultar="+id);
  }
  EditarEmpleado(id:any,datosEmpleado:any):Observable<any>{
    return this.clientHttp.post(this.API+"?actualizar="+id,datosEmpleado);
  }
}