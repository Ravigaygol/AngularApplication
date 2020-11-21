import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-crud-search-filter',
  templateUrl: './emp-crud-search-filter.component.html',
  styleUrls: ['./emp-crud-search-filter.component.css']
})
export class EmpCRUDSearchFilterComponent implements OnInit {

  ngOnInit(): void {
  }
  employees: any;    
    searchText:string
    constructor() {
        this.employees = [
            {
                code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '25/6/1988',fulltime:true
            },
            {
                code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982',fulltime:false
            },
            {
                code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979',fulltime:true
            },
            {
                code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '14/10/1980',fulltime:false
            },
        ];
    }
    // trackByEmpCode(index: number, employee: any): string {
    //     console.log("in trackByEmpCode ");
    // return employee.code;
    // }


}
