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
                <img src="assets/images/projects/ecommerce.jpg" alt="E-commerce Platform">
                <div class="project-overlay">
                  <a href="#" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>E-commerce Platform</h4>
                <p>A full-featured e-commerce platform with real-time inventory management and secure payment processing.</p>
                <div class="project-tags">
                  <span class="tag">Angular</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">AWS</span>
                  <span class="tag">MongoDB</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-cloud"></i>
                    <span>Cloud Integration</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-robot"></i>
                    <span>AI Recommendations</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-card" data-aos="fade-up" data-aos-delay="200">
              <div class="project-image">
                <div class="project-badge">Web App</div>
                <img src="assets/images/projects/crm.jpg" alt="CRM System">
                <div class="project-overlay">
                  <a href="#" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>CRM System</h4>
                <p>Enterprise-grade CRM system with advanced analytics and automation capabilities.</p>
                <div class="project-tags">
                  <span class="tag">React</span>
                  <span class="tag">Firebase</span>
                  <span class="tag">Cloudflare</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-cloud"></i>
                    <span>Cloud Storage</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-robot"></i>
                    <span>AI Analytics</span>
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
                <img src="assets/images/projects/fitness.jpg" alt="Fitness Tracker">
                <div class="project-overlay">
                  <a href="#" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Fitness Tracker</h4>
                <p>AI-powered fitness tracking app with personalized workout recommendations and progress analytics.</p>
                <div class="project-tags">
                  <span class="tag">React Native</span>
                  <span class="tag">Firebase</span>
                  <span class="tag">Google ADK</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-cloud"></i>
                    <span>Cloud Sync</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-robot"></i>
                    <span>AI Workouts</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="project-card" data-aos="fade-up" data-aos-delay="200">
              <div class="project-image">
                <div class="project-badge">Mobile App</div>
                <img src="assets/images/projects/food-delivery.jpg" alt="Food Delivery App">
                <div class="project-overlay">
                  <a href="#" class="btn btn-primary">
                    <i class="fas fa-external-link-alt"></i>
                    View Project
                  </a>
                </div>
              </div>
              <div class="project-content">
                <h4>Food Delivery App</h4>
                <p>Real-time food delivery platform with live tracking and AI-powered route optimization.</p>
                <div class="project-tags">
                  <span class="tag">Flutter</span>
                  <span class="tag">AWS</span>
                  <span class="tag">Google Maps</span>
                </div>
                <div class="project-features">
                  <div class="feature">
                    <i class="fas fa-cloud"></i>
                    <span>Cloud Backend</span>
                  </div>
                  <div class="feature">
                    <i class="fas fa-robot"></i>
                    <span>AI Routing</span>
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
