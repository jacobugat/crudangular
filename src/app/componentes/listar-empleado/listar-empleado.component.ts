import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
  styleUrls: ['./listar-empleado.component.css']
})
export class ListarEmpleadoComponent implements OnInit {
  Empleados:any;
  constructor(
    private crudService:CrudService
  ) { }
  
  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(respuesta=>{
      console.log(respuesta);
      this.Empleados=respuesta;
    });
  }

  // Nueva implementacion 20/07/2022
  borrarRegistro(id:any,iControl:any){
    console.log(id);
    console.log(iControl);
    // Nueva implementacion 21/07/2022
    if(window.confirm("Desea realmente borrar el registro?")){
      this.crudService.BorrarEmpleado(id).subscribe((respuesta)=>{
        this.Empleados.splice(iControl, 1);
      });
    }
  }

}
