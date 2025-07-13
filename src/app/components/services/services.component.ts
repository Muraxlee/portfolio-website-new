import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="services">
      <div class="hero-background">
        <div class="hero-shape shape1"></div>
        <div class="hero-shape shape2"></div>
        <div class="hero-shape shape3"></div>
        <div class="overlay-pattern"></div>
      </div>
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">Services</span>
          <h2>My Services</h2>
          <p>
            Specialized expertise to help your business succeed in the digital landscape
          </p>
        </div>

        <div class="grid-2">
          <!-- Web Development -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="service-icon">
              <i class="fas fa-code"></i>
            </div>
              <h3>Web Development</h3>
              <p>
              Custom websites and web applications built with modern technologies
              </p>
              <ul class="service-features">
                <li>
                <span class="feature-bullet"></span>
                <span>Responsive Design</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>Performance Optimization</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>SEO Best Practices</span>
                </li>
              </ul>
          </div>

          <!-- Mobile Development -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="service-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
              <h3>Mobile Development</h3>
              <p>
              Native and cross-platform mobile applications for iOS and Android
              </p>
              <ul class="service-features">
                <li>
                <span class="feature-bullet"></span>
                <span>Cross-Platform</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>Native Performance</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>Offline Support</span>
                </li>
              </ul>
          </div>

          <!-- Cloud Solutions -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="300">
            <div class="service-icon">
              <i class="fas fa-cloud"></i>
            </div>
              <h3>Cloud Solutions</h3>
              <p>
              Scalable cloud infrastructure and serverless applications
              </p>
              <ul class="service-features">
                <li>
                <span class="feature-bullet"></span>
                <span>AWS Integration</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>Serverless Architecture</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                <span>Auto Scaling</span>
                </li>
              </ul>
          </div>

          <!-- AI Integration -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="400">
            <div class="service-icon">
              <i class="fas fa-robot"></i>
            </div>
              <h3>AI Integration</h3>
              <p>
              Intelligent solutions leveraging machine learning and AI capabilities
              </p>
              <ul class="service-features">
                <li>
                <span class="feature-bullet"></span>
                  <span>Machine Learning with n8n</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                  <span>Google AI SDK Integration</span>
                </li>
                <li>
                <span class="feature-bullet"></span>
                  <span>Automated AI Workflows</span>
                </li>
            </ul>
          </div>

          <!-- DevOps -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="500">
            <div class="service-icon">
              <i class="fas fa-cogs"></i>
            </div>
            <h3>DevOps</h3>
            <p>
              Streamlined development operations and CI/CD pipeline automation
            </p>
            <ul class="service-features">
              <li>
                <span class="feature-bullet"></span>
                <span>Continuous Integration</span>
              </li>
              <li>
                <span class="feature-bullet"></span>
                <span>Automated Deployment</span>
              </li>
              <li>
                <span class="feature-bullet"></span>
                <span>Infrastructure as Code</span>
                </li>
              </ul>
          </div>

          <!-- UI/UX Design -->
          <div class="service-card" data-aos="fade-up" data-aos-delay="600">
            <div class="service-icon">
              <i class="fas fa-pencil-ruler"></i>
            </div>
            <h3>UI/UX Design</h3>
            <p>
              User-centered design with focus on usability and visual appeal
            </p>
            <ul class="service-features">
              <li>
                <span class="feature-bullet"></span>
                <span>User Research</span>
              </li>
              <li>
                <span class="feature-bullet"></span>
                <span>Wireframing & Prototyping</span>
              </li>
              <li>
                <span class="feature-bullet"></span>
                <span>Design Systems</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="cta-section text-center" data-aos="fade-up">
          <h3>Ready to Start Your Project?</h3>
          <p>
            Let's work together to bring your ideas to life. I'm here to help you create
            something amazing.
          </p>
          <a routerLink="/contact" class="btn btn-primary">
            <i class="fas fa-paper-plane"></i>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../home/home.component.scss' as home;

    .services {
      position: relative;
      padding-top: 6rem;
      padding-bottom: 4rem;
      min-height: 100vh;
      z-index: 1;
      color: white;
    }

    .section-header, .grid, .cta-section {
      position: relative;
      z-index: 2;
    }

    .section-header h2 {
      color: white;
      font-weight: 600;
      margin-bottom: 1rem;
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

    .section-header p {
      color: rgba(255, 255, 255, 0.9);
      margin-top: 1rem;
    }

    .grid-2 {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      width: 100%;
      max-width: 1280px;
      margin: 0 auto;
    }

    .service-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      text-align: left;
      gap: 25px;
      padding: 30px;
      border-radius: 12px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.03);
      height: 100%;
      position: relative;
      overflow: hidden;
      color: white;
      background-color: #1E1E1E !important;
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
      border-color: rgba(59, 130, 246, 0.1);
      background-color: #1E1E1E !important;
    }

    /* Service icon styling */
    .service-icon {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 54px;
      height: 54px;
      background: #3b82f6 !important;
      color: white !important;
      border-radius: 10px;
      font-size: 1.35rem;
      flex-shrink: 0;
      margin-bottom: 0;
      box-shadow: 0 5px 15px rgba(59, 130, 246, 0.25);
    }

    .service-icon i {
      color: white !important;
    }

    /* Heading styling */
    h3 {
      text-align: left;
      color: #ffffff !important;
      width: 100%;
      margin-bottom: 10px;
      font-weight: 700;
      font-size: 1.5rem;
      letter-spacing: -0.01em;
    }

    /* Paragraph styling */
    .service-content p, p {
      color: oklch(70.9% 0.015 304.04) !important;
      margin-bottom: 20px;
      line-height: 1.6;
      font-size: 0.95rem;
      font-weight: 400;
      max-width: 100%;
      text-align: left;
      width: 100%;
      }

    /* Feature list styling */
    .service-features {
      list-style: none;
      padding: 0;
      width: 100%;
      margin-top: 5px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: flex-start;
    }

    .service-features li {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 10px;
      margin-bottom: 0;
      text-align: left;
      width: auto;
    }

    .service-features li i {
        display: flex;
        align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      color: #3b82f6 !important;
      background: transparent !important;
      border: none;
      box-shadow: none;
      width: auto;
      height: auto;
      margin-top: 0;
      opacity: 0.9;
    }

    .service-features span {
      color: rgba(255, 255, 255, 0.8) !important;
      font-size: 0.95rem;
      font-weight: 400;
      line-height: 1.4;
      text-align: left;
    }

    /* Section styling */
    .section-header {
      margin-bottom: 60px;
    }

    .section-header h2 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 16px;
      color: white !important;
    }

    .section-header p {
      font-size: 1.1rem;
      color: rgba(255, 255, 255, 0.7) !important;
      max-width: 700px;
      margin: 0 auto;
    }

    @media (max-width: 1200px) {
      .grid-2 {
        grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 768px) {
      .grid-2 {
        grid-template-columns: 1fr;
        gap: 20px;
      }

      .service-card {
        padding: 25px;
      }

      .section-header h2 {
        font-size: 2rem;
      }
    }

    .cta-section {
      margin-top: 4rem;
      background: rgba(20, 20, 30, 0.1);
      backdrop-filter: blur(10px);
      border-radius: var(--radius-lg);
      padding: 3rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(124, 58, 237, 0.1);
      position: relative;
      overflow: hidden;
    }

    .cta-section:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
      background: #3b82f6;
      }

    .cta-section h3 {
      color: white;
        margin-bottom: 1rem;
      font-weight: 600;
      }

    .cta-section p {
      color: rgba(255, 255, 255, 0.9);
        margin-bottom: 2rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

    .btn {
      color: white;
      font-weight: 500;
    }

    .btn-primary {
      background: #3b82f6;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
      transition: all 0.3s ease;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
      background: #2563eb;
    }

    .grid {
      gap: 2.5rem;
    }

    /* Modern animation for service cards */
      .service-card {
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .service-card:hover .service-icon {
      transform: translateY(-5px) scale(1.05);
      box-shadow: 0 8px 20px rgba(59, 130, 246, 0.4);
    }

    .service-icon {
      transition: all 0.3s ease;
    }

    /* Section titles (Web Development, Mobile Development, etc.) */
    h2, h3 {
      color: #ffffff !important;
      }

    /* Feature checkmark icons */
    .service-features i.fas.fa-check-circle {
      color: #3b82f6 !important;
      text-shadow: none;
    }

    /* Ensure card titles are clearly visible */
    .service-card h3 {
      text-align: left;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    /* Ensure all text in the services section is clearly visible */
    .services p,
    .services span,
    .services h2,
    .services h3 {
      color: #ffffff !important;
      }

    .service-content p {
      color: rgba(255, 255, 255, 0.95) !important;
      font-weight: 400;
    }

    .service-features span {
      color: rgba(255, 255, 255, 0.95) !important;
      font-weight: 500;
    }

    .container {
      max-width: 1200px;
      padding: 0 1.5rem;
      margin: 0 auto;
    }

    .section-header {
      margin-bottom: 3rem;
    }
  `]
})
export class ServicesComponent implements OnInit {
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
