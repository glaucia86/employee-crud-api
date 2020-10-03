import { Component, OnInit } from '@angular/core';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';
import {
  NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  constructor(
    private slimLoadingBarService: SlimLoadingBarService,
    private router: Router
  ) { }

  /**
   * OnInit responsável por trabalhar com a questão do Slim Loading Bar na aplicação.
   */
  ngOnInit(): void {
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }

  /**
   * @param event Método responsável por tratar as condicionais em relação ao Loading Bar
   */
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this.slimLoadingBarService.start();
    }

    if (event instanceof NavigationEnd) {
      this.slimLoadingBarService.complete();
    }

    if (event instanceof NavigationCancel) {
      this.slimLoadingBarService.stop();
    }

    if (event instanceof NavigationError) {
      this.slimLoadingBarService.stop();
    }
  }
}
