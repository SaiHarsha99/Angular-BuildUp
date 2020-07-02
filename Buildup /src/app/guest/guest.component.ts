import { Component } from '@angular/core';

@Component({
    templateUrl: 'guest.component.html',
    styleUrls: ['guest.component.css']
})
export class GuestComponent {
    public pageTitle = 'Guest';

    constructor() {
        document.getElementById('guest').style.display = 'none';
        document.getElementById('login').style.display = '';
    }

}
