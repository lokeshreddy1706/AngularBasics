import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent implements OnInit {

  public addMultipleHeroes: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.addMultipleHeroes = this._fb.group({
      multipleHeroes: this._fb.array([this.initmultipleHeroes()])
    });
  }

  get formArr() {
    return this.addMultipleHeroes.get('multipleHeroes') as FormArray;
  }

  initmultipleHeroes() {
    return this._fb.group({
      name: [''],
      number: [''],
      i:['']
    });
  }

  addNewRow() {
    this.formArr.push(this.initmultipleHeroes());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

}
