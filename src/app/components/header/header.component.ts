import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header [class.scrolled]="isScrolled">
      <div class="container">
        <div class="logo">
          <a routerLink="/">Portfolio</a>
        </div>
        <nav>
          <ul>
            <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/about" routerLinkActive="active">About</a></li>
            <li><a routerLink="/projects" routerLinkActive="active">Projects</a></li>
            <li><a routerLink="/services" routerLinkActive="active">Services</a></li>
            <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
          </ul>
        </nav>
        <a href="assets/Murali Resume.pdf" target="_blank" class="resume-btn">Resume</a>
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="mobile-menu" [class.active]="isMobileMenuOpen">
        <button class="mobile-menu-close" (click)="closeMobileMenu()">
          <i class="fas fa-times"></i>
        </button>
        <nav>
          <ul>
            <li><a routerLink="/" (click)="closeMobileMenu()" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a></li>
            <li><a routerLink="/about" (click)="closeMobileMenu()" routerLinkActive="active">About</a></li>
            <li><a routerLink="/projects" (click)="closeMobileMenu()" routerLinkActive="active">Projects</a></li>
            <li><a routerLink="/services" (click)="closeMobileMenu()" routerLinkActive="active">Services</a></li>
            <li><a routerLink="/contact" (click)="closeMobileMenu()" routerLinkActive="active">Contact</a></li>
            <li><a href="assets/Murali Resume.pdf" target="_blank" (click)="closeMobileMenu()">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      padding: 1.5rem 0;
      background-color: var(--background-color);
      transition: all var(--transition-normal) ease;
    }

    header.scrolled {
      padding: 1rem 0;
      background-color: rgba(17, 17, 17, 0.95);
      backdrop-filter: blur(10px);
      box-shadow: var(--shadow-md);
      border-bottom: 1px solid var(--border-color);
    }

    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo a {
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      background: var(--primary-gradient);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: -0.02em;
    }

    nav ul {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    nav ul li {
      margin-left: 2.5rem;
    }

    nav ul li a {
      color: var(--text-color);
      text-decoration: none;
      font-size: 1rem;
      font-weight: 500;
      transition: color var(--transition-normal) ease;
      position: relative;
      padding-bottom: 0.25rem;
    }

    nav ul li a:hover,
    nav ul li a.active {
      color: var(--primary-color);
    }

    nav ul li a::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: var(--primary-gradient);
      transition: width var(--transition-normal) ease;
      border-radius: var(--radius-full);
    }

    nav ul li a:hover::after,
    nav ul li a.active::after {
      width: 100%;
    }

    .resume-btn {
      background: var(--primary-gradient);
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-full);
      text-decoration: none;
      font-weight: 600;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: var(--shadow-md);
      margin-left: 2rem; /* Space from navigation */
    }

    .resume-btn:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-lg);
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      color: var(--text-color);
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast) ease;
    }

    .mobile-menu-btn:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .mobile-menu {
      position: fixed;
      top: 0;
      right: -100%;
      width: 75%;
      max-width: 320px;
      height: 100vh;
      background-color: #1E1E1E; /* Explicit dark background */
      z-index: 1001; 
      transition: right var(--transition-normal) ease;
      padding: 5rem 2rem 2rem;
      box-shadow: var(--shadow-lg); 
      border-left: 1px solid var(--border-color); 
      display: flex;
      flex-direction: column;
      overflow-y: auto;
    }

    .mobile-menu.active {
      right: 0;
    }

    .mobile-menu nav {
      flex-grow: 1;
      display: flex; 
      flex-direction: column;
    }

    .mobile-menu nav ul {
      flex-direction: column;
      align-items: flex-start;
      height: 100%;
      justify-content: flex-start;
      padding-top: 2rem;
      width: 100%;
      background-color: transparent; /* Ensure no background on the ul itself */
    }

    .mobile-menu nav ul li {
      margin: 0.75rem 0;
      width: 100%;
      display: block; 
    }

    .mobile-menu nav ul li a {
      font-size: 1.2rem;
      display: block; 
      padding: 0.75rem 1rem;
      color: white !important; /* Force white color for menu text */
      text-decoration: none;
      border-radius: var(--radius);
      transition: background-color 0.3s ease;
      line-height: 1.5;
    }

    .mobile-menu nav ul li a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .mobile-menu-close {
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      background: none;
      border: none;
      color: white !important; /* Force white color for close button */
      font-size: 1.5rem;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: var(--radius-sm);
      transition: background-color var(--transition-fast) ease;
      z-index: 1003; 
    }

    .mobile-menu-close:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    @media (max-width: 768px) {
      /* The main desktop navigation is hidden on mobile */
      header > .container > nav {
        display: none;
      }

      .resume-btn {
        display: none; /* Hide desktop resume button on mobile */
      }

      .mobile-menu-btn {
        display: block;
        color: white !important; /* Force white color for menu button */
      }

      .mobile-menu {
        width: 100%;
        max-width: 320px;
        background-color: #1E1E1E; /* Explicit dark background */
        z-index: 1001;
      }

      .mobile-menu nav {
        display: flex; 
        flex-direction: column;
        flex-grow: 1;
      }

      .mobile-menu nav ul {
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        justify-content: flex-start;
        padding-top: 2rem;
        width: 100%;
        background-color: transparent; /* Ensure no background on ul */
      }

      .mobile-menu nav ul li {
        display: block; 
        margin: 0.75rem 0;
        width: 100%;
      }

      .mobile-menu nav ul li a {
        font-size: 1.2rem;
        display: block; 
        padding: 0.75rem 1rem;
        color: white; /* Default color for mobile menu items, no !important */
        text-decoration: none;
        border-radius: var(--radius);
        transition: background-color 0.3s ease, color 0.3s ease;
        line-height: 1.5;
        position: relative; /* For the underline */

        &:after {
          /* Reset ::after for mobile menu to ensure no inherited underlines */
          content: none;
        }

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--primary-color);
        }

        &.active {
          background-color: rgba(255, 255, 255, 0.1);
          color: white; /* Keep text white for active state in mobile */

          &:after {
            content: '';
            position: absolute;
            bottom: -2px; /* Adjust as needed */
            left: 0;
            width: 100%;
            height: 2px;
            background: var(--primary-gradient); /* Use your gradient for consistency */
            border-radius: var(--radius-full);
          }
        }
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log('Current URL:', this.router.url);
      this.logActiveStates();
    });
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      console.log('Mobile menu opened. Current URL:', this.router.url);
      this.logActiveStates();
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  logActiveStates() {
    const navLinks = document.querySelectorAll('.mobile-menu nav ul li a');
    navLinks.forEach(link => {
      const routerLink = link.getAttribute('routerLink');
      const isActive = link.classList.contains('active');
      console.log(`Link: ${routerLink}, Is Active: ${isActive}`);
    });
  }
}
