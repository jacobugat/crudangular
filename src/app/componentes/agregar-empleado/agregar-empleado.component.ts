import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html',
  styleUrls: ['./agregar-empleado.component.css']
})
export class AgregarEmpleadoComponent implements OnInit {
  // nueva implementacion
  // tiene todos los datos que van a llegar de formulario
  formularioDeEmpleados:FormGroup; 
  
  // public formulario:FormBuilder , estamos recepcionando los datos del formulario
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 
    this.formularioDeEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    });
   }
  
  // fin de la nueva implementacion
  ngOnInit(): void {
  }


  // nueva implementacion
  enviarDatos():any{ // any, cualquier dato o informacion que este llegando
    console.log("Me presionaste ");
    console.log(this.formularioDeEmpleados.value);  
    this.crudService.AgregarEmpleado(this.formularioDeEmpleados.value).subscribe(respuesta=>{
      this.ruteador.navigateByUrl('/listar-empleado');
    });
  }
  // fin de la nueva implementacion
}