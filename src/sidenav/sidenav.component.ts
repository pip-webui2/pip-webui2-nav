import { Component, Input, OnInit, Renderer, ElementRef } from '@angular/core';

import { AfterViewInit, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { PipSidenavService } from './shared/sidenav.service';

@Component({
	selector: 'pip-sidenav',
	templateUrl: 'sidenav.component.html',
	styleUrls: ['./sidenav.component.scss']
})

export class PipSidenavComponent implements OnInit, AfterViewInit {
	@ViewChild('sidenav') sidenav: MdSidenav;
	private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
	private _side$: BehaviorSubject<string> = new BehaviorSubject<string>('');

	public constructor(
		private service: PipSidenavService,
		private renderer: Renderer,
		private elRef: ElementRef
	) {
		renderer.setElementClass(elRef.nativeElement, 'pip-sidenav', true);

		this.service.opened$.subscribe((isOpened) => {
			this._opened$.next(isOpened);
		});

		this.service.side$.subscribe((mode) => {
			this._side$.next(mode);
		});
	}

	public get opened$(): Observable<boolean> {
		return this._opened$;
	}

	public get side$(): Observable<string> {
		return this._side$;
	}

	ngOnInit() { }

	ngAfterViewInit() {
		this.service.sidenav = this.sidenav;
	}

}