import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="projects">
      <div class="hero-background">
        <div class="hero-shape shape1"></div>
        <div class="hero-shape shape2"></div>
        <div class="hero-shape shape3"></div>
        <div class="overlay-pattern"></div>
      </div>
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">My Work</span>
          <h2>Featured Projects</h2>
          <p>
            Here are some of my recent projects showcasing my expertise in web and mobile development
          </p>
        </div>

        <!-- Web Applications -->
        <div class="project-category" data-aos="fade-up">
          <h3>Web Applications</h3>
          <div class="grid grid-2">
            <div class="project-card" data-aos="fade-up" data-aos-delay="100">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="/images/InvoiceFlow.webp" alt="Invoice Management SaaS">
                <div class="project-overlay">
                  <a href="https://youtu.be/tugbLWmV5aI" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Demo
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Invoice Management SaaS</h4>
                <p>Real-time invoicing dashboard with analytics, PDF generation, and team-based access control.</p>
                <div class="project-tags">
                  <span class="tag">React</span>
                  <span class="tag">Firebase</span>
                  <span class="tag">Cloud Functions</span>
                  <span class="tag">Stripe</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-file-invoice"></i>
                    <span>PDF Generation</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-users"></i>
                    <span>Team Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-card" data-aos="fade-up" data-aos-delay="200">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="/images/mentore Agro.webp" alt="Mentore Agro Products">
                <div class="project-overlay">
                  <a href="https://mentoreagroproducts.netlify.app/" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Mentore Agro Products</h4>
                <p>Business website for an agriculture export company with product listings and inquiry form.</p>
                <div class="project-tags">
                  <span class="tag">HTML</span>
                  <span class="tag">CSS</span>
                  <span class="tag">JavaScript</span>
                  <span class="tag">Netlify</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-list"></i>
                    <span>Product Listings</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-envelope"></i>
                    <span>Inquiry Form</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-2 mt-4">
            <div class="project-card" data-aos="fade-up" data-aos-delay="300">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="/images/SnakHive.webp" alt="SnackHives">
                <div class="project-overlay">
                  <a href="https://snackhive.netlify.app/" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>SnackHives</h4>
                <p>Promotional landing page for a snacks delivery startup with CTA integration and responsive UI.</p>
                <div class="project-tags">
                  <span class="tag">HTML</span>
                  <span class="tag">CSS</span>
                  <span class="tag">JavaScript</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-mobile-alt"></i>
                    <span>Responsive Design</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-bullhorn"></i>
                    <span>CTA Integration</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-card" data-aos="fade-up" data-aos-delay="400">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="/images/AgenTracker.webp" alt="Agent GPS Tracker">
                <div class="project-overlay">
                  <a href="https://www.youtube.com/watch?v=pof2bGm5U44" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Demo
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Agent GPS Tracker</h4>
                <p>Web-based real-time tracking and reporting tool for field agents.</p>
                <div class="project-tags">
                  <span class="tag">React</span>
                  <span class="tag">Firebase</span>
                  <span class="tag">Mapbox</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>Real-time Tracking</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-chart-line"></i>
                    <span>Reporting</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-2 mt-4">
            <div class="project-card" data-aos="fade-up" data-aos-delay="500">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="/images/Tindog.webp" alt="TinDog">
                <div class="project-overlay">
                  <a href="https://muraxlee.github.io/TinDog/" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Live
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>TinDog</h4>
                <p>Fun front-end project mimicking a dating app for dogs. Great for UI/UX exploration.</p>
                <div class="project-tags">
                  <span class="tag">HTML</span>
                  <span class="tag">Bootstrap</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-palette"></i>
                    <span>UI/UX Exploration</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-dog"></i>
                    <span>Fun Project</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Applications -->
        <div class="project-category" data-aos="fade-up">
          <h3>Mobile Applications</h3>
          <div class="grid grid-2">
            <div class="project-card" data-aos="fade-up" data-aos-delay="100">
              <div class="project-image">
                <div class="project-badge">Mobile App</div>
                <img src="/images/thamnail_kants.webp" alt="Kant – Anonymous Social App">
                <div class="project-overlay">
                  <a href="https://gitfront.io/r/Ruby/QuXsQDixAEqm/Kants/" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Client Code
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Kant – Anonymous Social App</h4>
                <p>An anonymous social media platform with real-time feeds, anonymous posting, and privacy-first features.</p>
                <div class="project-tags">
                  <span class="tag">Flutter</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">PostgreSQL</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-user-secret"></i>
                    <span>Anonymous Posting</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-lock"></i>
                    <span>Privacy-First</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Desktop Software -->
        <div class="project-category" data-aos="fade-up">
          <h3>Desktop Software</h3>
          <div class="grid grid-2">
            <div class="project-card" data-aos="fade-up" data-aos-delay="100">
              <div class="project-image">
                <div class="project-badge">Desktop App</div>
                <img src="/images/Banker.webp" alt="Banker – Pawnshop Management App">
                <div class="project-overlay">
                  <a href="https://gitfront.io/r/Ruby/r6BkWibqWpWt/Banker_New/" target="_blank" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Repo
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Banker – Pawnshop Management App</h4>
                <p>A fully offline desktop solution for pawnshop operations with secure local transactions and RDLC reports.</p>
                <div class="project-tags">
                  <span class="tag">C#</span>
                  <span class="tag">SQLite</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-lock"></i>
                    <span>Secure Transactions</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-file-invoice"></i>
                    <span>RDLC Reports</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../home/home.component.scss' as home;

    .projects {
      position: relative;
      padding-top: 8rem;
      padding-bottom: 6rem;
      min-height: 100vh;
      z-index: 1;
      color: white;
    }

    .section-header, .projects-grid {
      position: relative;
      z-index: 2;
    }

    .section-header h2 {
      color: white;
    }

    .section-header p {
      color: rgba(255, 255, 255, 0.8);
    }

    .section-subtitle {
      display: block;
      color: var(--primary-color);
      font-weight: 600;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.875rem;
      text-align: center;
    }

    .project-category {
      position: relative;
      z-index: 2;
      margin-top: 4rem;
    }

    .project-category h3 {
      margin-bottom: 2rem;
      color: var(--text-color);
      font-size: 2rem;
      text-align: left;
    }

    .project-card {
      border-radius: var(--radius-lg);
      overflow: hidden;
      position: relative;
      transition: transform 0.3s ease;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
      height: 100%;
      background-color: #33304b;
      color: white;
    }

    .project-image {
      position: relative;
      height: 200px;
      overflow: hidden;
      border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    }

    .project-badge {
      position: absolute;
      top: 1rem;
      right: 1rem;
      padding: 0.5rem 1rem;
      background: rgba(0, 0, 0, 0.6);
      color: white;
      border-radius: var(--radius-full);
      font-size: 0.75rem;
      z-index: 1;
      backdrop-filter: blur(4px);
    }

    .project-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }

    .project-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    .project-card:hover .project-overlay {
      opacity: 1;
    }

    .project-card:hover img {
      transform: scale(1.05);
    }

    .project-info {
      padding: 1.5rem;
    }

    .project-title {
      font-size: 1.25rem;
        font-weight: 600;
      margin-bottom: 0.5rem;
      color: white;
    }

    .project-description {
      font-size: 0.875rem;
      margin-bottom: 1rem;
      color: rgba(255, 255, 255, 0.9);
      line-height: 1.6;
    }

    .project-tags {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
    }

    .project-tag {
      font-size: 0.7rem;
      padding: 0.25rem 0.5rem;
      border-radius: var(--radius-sm);
      background-color: rgba(124, 58, 237, 0.2);
      color: rgba(255, 255, 255, 0.9);
    }

    .project-links {
      display: flex;
      gap: 0.75rem;
      margin-top: 1rem;
    }

    .project-link {
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.875rem;
      color: #7c3aed;
      transition: color 0.2s ease;
    }

    .project-link:hover {
      color: #9f6fff;
    }

    .project-features {
      display: flex;
      gap: 1.5rem;
      border-top: 1px solid var(--border-color);
      padding-top: 1rem;
    }

    .feature {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .feature i {
      color: var(--primary-color);
    }

    .feature span {
      color: var(--text-color-light);
      font-size: 0.875rem;
    }

    @media (max-width: 768px) {
      .grid-2 {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: true,
        offset: 100
      });
    }
  }
}
