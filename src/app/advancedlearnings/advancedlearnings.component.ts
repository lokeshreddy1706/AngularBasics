import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgxSmartModalService, NgxSmartModalComponent } from 'ngx-smart-modal';
import { MaintenanceFormComponent } from './maintenance-form/maintenance-form.component';

@Component({
  selector: 'app-advancedlearnings',
  templateUrl: './advancedlearnings.component.html',
  styleUrls: ['./advancedlearnings.component.css']
})
export class AdvancedlearningsComponent implements OnInit, AfterViewInit  {

  @ViewChild (MaintenanceFormComponent) maintenanceFormComponent : MaintenanceFormComponent;

  constructor(public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit() {
  }

  openModal(modalId: string, clickMode: string): void {
    this.maintenanceFormComponent.modeSubject.next({mode:clickMode});
    this.ngxSmartModalService.getModal(modalId).open();
  }

  closeModal(modalId: string): void {
    this.ngxSmartModalService.getModal(modalId).close();
  }

  formArrayModal(): void {
    
  }

  ngAfterViewInit() {
    this.ngxSmartModalService.getModal('addEditModal').onClose.subscribe((modal: NgxSmartModalComponent) => {
      this.maintenanceFormComponent.resetForm();
    });
  }

}
