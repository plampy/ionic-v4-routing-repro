import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit, OnDestroy {
	ngOnInit() {
		console.count('HomePage ngOnInit');
	}

	ngOnDestroy() {
		console.count('HomePage ngOnDestroy');
	}
}
