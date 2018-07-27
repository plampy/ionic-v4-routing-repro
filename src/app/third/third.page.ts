import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-third',
	templateUrl: './third.page.html',
	styleUrls: ['./third.page.scss']
})
export class ThirdPage implements OnInit {
	constructor() {}

	ngOnInit() {
		console.count('ThirdPage ngOnInit');
	}

	ngOnDestroy() {
		console.count('ThirdPage ngOnDestroy');
	}
}
