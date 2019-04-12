import { Component, OnInit, getModuleFactory, ViewChild, AfterViewInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import { MaintenanceModal } from './maintenance-form-model';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-maintenance-form',
  templateUrl: './maintenance-form.component.html',
  styleUrls: ['./maintenance-form.component.css']
})
export class MaintenanceFormComponent implements OnInit, AfterViewInit {

  modeSubject = new Subject<any>();
  maintenanceForm: FormGroup;
  mode: string;
  cities = [];
  selectedCity: any;

  @ViewChild('mf') myNgForm:NgForm ;
  
  constructor(private formBuilder: FormBuilder, private maintenanceModal: MaintenanceModal, private changeDetectorRef: ChangeDetectorRef) {
    this.createCities();
   }

  formErrors:any = {
    number:'',
    body:'',
    state:'',
    status:'',
    issueDate:'',
    expDate:''
  }

  ngOnInit() {
    this.buildForm();
    this.getMode();
  }

  buildForm() {
    this.maintenanceForm = this.formBuilder.group({
      number: [null, [Validators.required], this.validations()],
      body: [null, [Validators.required]],
      state: [null, [Validators.required]],
      status: [null, [Validators.required]],
      issueDate: [null, [Validators.required]],
      expDate: [null, [Validators.required]]
    }, {updateOn: 'blur'});
    this.maintenanceForm.controls.state.valueChanges.subscribe(() => {
      this.selectedCity =  this.maintenanceForm.controls.state.value;
    })
    this.maintenanceForm.valueChanges.subscribe( () => {
      console.log("Values changed ");
      this.changeDetectorRef.detectChanges()
    });
    this.validateFields();
  }

  getMode() {
    this.modeSubject.subscribe((response) => {
      this.mode = response.mode;
      console.log("Mode ::::" + this.mode)
      this.buildForm();
    });
  }

  isEditMode() {
    return this.mode === 'edit' ? true : false;
  }

  validateFields() {
    if (this.isEditMode()) {
      this.maintenanceForm.controls.number.disable();
      this.maintenanceForm.controls.body.disable();
      this.maintenanceForm.controls.state.disable();
    } else {
      this.maintenanceForm.controls.status.disable();
      this.maintenanceForm.controls.issueDate.disable();
      this.maintenanceForm.controls.expDate.disable();
    }
  }

  validations(){
    this.formErrors.number="Required Field";
  }

  resetForm() {
    console.log("Resetting Form");
    this.myNgForm.resetForm();
    this.maintenanceForm.reset();
    for( let i in this.maintenanceForm.controls ) {
      this.maintenanceForm.controls[i].enable();
      this.maintenanceForm.controls[i].setErrors(null);
  }
    this.maintenanceForm.markAsUntouched();
    this.maintenanceForm.markAsPristine();
  }

  private createCities() {
    this.cities = Array.from({ length: 100 }, (value, key) => key)
      .map(val => ({
        id: val,
        name: `city ${val}`
      }));
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }
}
