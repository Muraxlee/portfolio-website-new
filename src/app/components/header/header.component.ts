import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
        <button class="mobile-menu-btn" (click)="toggleMobileMenu()">
          <i class="fas fa-bars"></i>
        </button>
      </div>
      <div class="mobile-menu" [class.active]="isMobileMenuOpen">
        <nav>
          <ul>
            <li><a routerLink="/" (click)="closeMobileMenu()">Home</a></li>
            <li><a routerLink="/about" (click)="closeMobileMenu()">About</a></li>
            <li><a routerLink="/projects" (click)="closeMobileMenu()">Projects</a></li>
            <li><a routerLink="/services" (click)="closeMobileMenu()">Services</a></li>
            <li><a routerLink="/contact" (click)="closeMobileMenu()">Contact</a></li>
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
      background-color: var(--card-background);
      z-index: 1001;
      transition: right var(--transition-normal) ease;
      padding: 5rem 2rem 2rem;
      box-shadow: var(--shadow-lg);
      border-left: 1px solid var(--border-color);
    }

    .mobile-menu.active {
      right: 0;
    }

    .mobile-menu nav ul {
      flex-direction: column;
    }

    .mobile-menu nav ul li {
      margin: 1.25rem 0;
    }

    .mobile-menu nav ul li a {
      font-size: 1.2rem;
      display: block;
      padding: 0.5rem 0;
    }

    @media (max-width: 768px) {
      nav {
        display: none;
      }

      .mobile-menu-btn {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMobileMenuOpen = false;

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
