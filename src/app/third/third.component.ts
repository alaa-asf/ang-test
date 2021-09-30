import { allData } from './allData.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { employees } from '../../assets/employees';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css'],
})
export class ThirdComponent implements OnInit {
  @ViewChild('closeButton') close!: ElementRef;
  @ViewChild('closeButton2') close2!: ElementRef;
  @ViewChild('closeButton3') close3!: ElementRef;
  allEmplyees = employees;
  // employeesData = employees.slice(0, 10);
  formValue!: FormGroup;
  numberOfEmp!: string;
  pageNum: number = 0;
  deleteArray: number[] = [];

  name: any;
  email: any;
  address: any;
  phone: any;
  // allDataobj:allData=new allData();

  constructor(private formbuilder: FormBuilder) {}
  ngOnInit(): void {
    // this.numOfEmp();
    this.formValue = this.formbuilder.group({
      id: [''],
      name: [''],
      email: [''],
      address: [''],
      phone: [''],
    });
  }

  newEmp() {
    this.allEmplyees.push(this.formValue.value);
    // let temp = document.getElementById('cancel');
    // temp?.click();
    this.close.nativeElement.click();
    this.formValue.reset();
  }

  deleteEmp(employee: any) {
    this.allEmplyees.forEach((key, value) => {
      if (key.id == employee.id) {
        this.allEmplyees.splice(value, 1);
      }
    });
  }

  onEdit(employee: any) {
    this.formValue.controls['id'].setValue(employee.id);
    this.formValue.controls['name'].setValue(employee.name);
    this.formValue.controls['email'].setValue(employee.email);
    this.formValue.controls['address'].setValue(employee.address);
    this.formValue.controls['phone'].setValue(employee.phone);
  }

  updateEmp() {
    let newValues = this.formValue.value;
    this.allEmplyees = this.allEmplyees.map((item) => {
      if (item.id === newValues.id) {
        return newValues;
      } else return item;
    });
    this.close2.nativeElement.click();
    this.formValue.reset();
  }

  numOfEmp() {
    this.numberOfEmp = this.allEmplyees.length.toString();
    console.log(this.numberOfEmp);
  }

  selectAll(event: any): void {
    if (event.target.checked)
      this.allEmplyees.forEach((item) => {
        this.deleteArray.push(item.id);
      });
    else this.deleteArray.length = 0;
  }

  elementMarkedForDelete(event: any, id: number) {
    if (event.target.checked) {
      this.deleteArray.push(id);
    } else {
      this.deleteArray = this.deleteArray.filter((item) => {
        if (item === id) {
          return false;
        }
        return true;
      });
    }
  }

  deleteSelected(): void {
    this.allEmplyees = this.allEmplyees.filter((item) => {
      if (this.deleteArray.includes(item.id)) {
        return false;
      }
      return true;
    });
    this.close3.nativeElement.click();
  }
}
