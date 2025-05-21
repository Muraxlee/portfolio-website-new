import { Component, OnInit, PLATFORM_ID, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ChatBotComponent } from './components/chat-bot/chat-bot.component';
import { isPlatformBrowser } from '@angular/common';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatBotComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'portfolio-website';
  private routerSubscription: Subscription | undefined;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Initialize AOS
      AOS.init({
        duration: 1000,
        once: false, // Changed to false to re-animate on scroll
        offset: 100,
        delay: 0,
        easing: 'ease-in-out',
        disable: 'mobile' // Disable on mobile for better performance
      });

      // Refresh AOS on route changes
      this.routerSubscription = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        // Wait for DOM to be updated
        setTimeout(() => {
          console.log('Refreshing AOS after navigation');
          AOS.refreshHard(); // Use refreshHard instead of refresh for more thorough update
        }, 200); // Increased timeout to ensure DOM is fully updated
      });
    }
  }

  ngAfterViewInit() {
    // Additional refresh after view is initialized
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        AOS.refresh();
      }, 500);
    }
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
