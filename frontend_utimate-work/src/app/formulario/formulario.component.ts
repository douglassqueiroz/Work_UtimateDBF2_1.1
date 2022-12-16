import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Music } from '../music/music';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formMusic: FormGroup;

  constructor( private formBuilder:FormBuilder) {}

  ngOnInit() {
    this.createForm(new Music());
  }

  createForm(music: Music) {
    this.formMusic = this.formBuilder.group({
      nome: [music.nome],
      genero: [music.genero],
    })
  }

  onSubmit() {
    console.log(this.formMusic.value);

    this.formMusic.reset(new Music());
  }
  
}
