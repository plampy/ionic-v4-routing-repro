import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-second',
	templateUrl: './second.page.html',
	styleUrls: ['./second.page.scss']
})
export class SecondPage implements OnInit, OnDestroy {
	constructor() {}

	ngOnInit() {
		console.count('SecondPage ngOnInit');
	}

	ngOnDestroy() {
		console.count('SecondPage ngOnDestroy');
	}
}
