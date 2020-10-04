import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import Employee from 'src/app/interfaces/Employee';
import { NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

describe('AppComponent', () => {
  let appComponent: AppComponent;

  let fixture: ComponentFixture<AppComponent>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const mockRouter = {
      events: of({}),
    };

    TestBed.configureTestingModule({
      imports: [CommonModule, ReactiveFormsModule, FontAwesomeModule],
      providers: [
        AppComponent,
        SlimLoadingBarService,
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(AppComponent);
    appComponent = fixture.componentInstance;

    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  describe('Initialization', () => {
    it('should be created', () => {
      expect(appComponent).toBeTruthy();
    });
    it('should init not EventNavigation', () => {
      const spy_ngOnInit = spyOn(appComponent, 'ngOnInit').and.callThrough();
      appComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
    it('should init with NavigationStart', () => {
      const event = new NavigationStart(0, 'URI');
      (<any>routerSpy.events) = of(event);
      const spy_ngOnInit = spyOn(appComponent, 'ngOnInit').and.callThrough();
      appComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
    it('should init with NavigationEnd', () => {
      const event = new NavigationEnd(0, 'URI', 'URL');
      (<any>routerSpy.events) = of(event);
      const spy_ngOnInit = spyOn(appComponent, 'ngOnInit').and.callThrough();
      appComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
    it('should init with NavigationCancel', () => {
      const event = new NavigationCancel(0, 'URI', 'FAIL');
      (<any>routerSpy.events) = of(event);
      const spy_ngOnInit = spyOn(appComponent, 'ngOnInit').and.callThrough();
      appComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
    it('should init with NavigationError', () => {
      const event = new NavigationError(0, 'URI', {});
      (<any>routerSpy.events) = of(event);
      const spy_ngOnInit = spyOn(appComponent, 'ngOnInit').and.callThrough();
      appComponent.ngOnInit();
      expect(spy_ngOnInit).toHaveBeenCalled();
    });
  });

});
