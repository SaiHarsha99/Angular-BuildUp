import { Component, Input ,OnInit} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {FormControl} from '@angular/forms';
import { startWith, map } from 'rxjs/operators';
import { PersonService } from '../persons.service';

@Component({
    templateUrl: 'person-list.component.html',
    styleUrls: ['person-list.component.css']
})
export class PersonListComponent {
    pageTitle = 'BuildUp';
    imageWidth = 300;
    imageHeight = 200;
    imageMargin = 12;
    errorMessage: string;
    persData: any = [];
    profData: any = [];
    newtasks:any =[]
    
    myControl = new FormControl();
    options: string[] = ['HTML', 'JavaScript', 'Canvas'];
    filteredOptions: Observable<string[]>;
  
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }

    // Fetches the persons data from service class
    constructor(private _personService: PersonService) {
        document.getElementById('login').style.display = '';
        document.getElementById('guest').style.display = 'none';
        document.getElementById('login').innerHTML = 'Logout';
        sessionStorage.setItem('loginTitle', 'Logout');
        document.getElementById('welcome').style.display = '';
        document.getElementById('welcome').style.color = '#ff0080';
      

        this._personService.getPersonsdata()
            .subscribe(
                persData => {
                    this._personService.persons = persData;
                    this.persData = this._personService.persons;
                },
                error => this.errorMessage = <any>error);

    }

    // Invoked when a tab (Personal/Professional Data) is clicked
    // Displays the data accordingly
    tabselect(datatype: string) {
        this.persData = [];
        this.profData = [];
        this._personService.datatype = datatype;
        if (datatype == "persData") {
            this._personService.getPersonsdata().subscribe(
                persData => {
                    this._personService.persons = persData;
                    this.persData = this._personService.persons;
                },
                error => this.errorMessage = <any>error);
        }
        else {
            this._personService.getPersonsdata().subscribe(
                profData => {
                    this._personService.persons = profData;
                    this.profData = this._personService.persons;
                },
                error => this.errorMessage = <any>error);
        }
    }

    addTask(newTask: string) {
        if (newTask) {
          this.newtasks.push(newTask);
        }
      }

}

