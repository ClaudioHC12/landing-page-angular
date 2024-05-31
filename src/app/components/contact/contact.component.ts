import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  protected usuario = {
    nombre: '',
    email: ''
  };
  private usuarioActivo: string = 'claudio';
  formularioContacto: FormGroup;
  tipoDni: string = 'DNI';

  constructor(private form: FormBuilder) {
    this.formularioContacto = this.form.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      tipoDni: ['']
    });
  }
  ngOnInit(): void {
    this.formularioContacto.get('nombre')?.setValue(this.usuarioActivo);
    this.formularioContacto.patchValue({
      nombre: 'USER'
    });
    this.formularioContacto.get('nombre')?.disable();
    this.formularioContacto.get('tipoDni')?.valueChanges.subscribe(valor => {
      this.tipoDni = valor;
    });
  }

  enviarDatos() {
    console.log(this.usuario);
  }

  datosFormulario() {
    console.log(this.formularioContacto);
  }
  hasErrors(controlName: string, errorType: string) {
    return (this.formularioContacto.get(controlName)?.hasError(errorType)
      && this.formularioContacto.get(controlName)?.touched);
  }
}
