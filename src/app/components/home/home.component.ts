import { Component, OnInit, PLATFORM_ID, Inject, ElementRef, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import AOS from 'aos';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-background">
        <div class="hero-shape shape1"></div>
        <div class="hero-shape shape2"></div>
        <div class="hero-shape shape3"></div>
        <div class="overlay-pattern"></div>
      </div>
      <div class="container">
        <div class="hero-content" data-aos="fade-up">
          <span class="badge">Welcome to my portfolio</span>
          <h1>Hi, I'm <span class="gradient-text">Murali P</span></h1>
          <h2>Full-Stack Developer & Cross-Platform App Engineer</h2>
          <p class="hero-description">
            I specialize in building full-stack web apps, mobile apps, and desktop solutions using React Native, Node.js, and .NET—delivering secure, scalable, and user-friendly products that solve real business problems.
          </p>
          <div class="hero-buttons">
            <a routerLink="/projects" class="btn btn-primary">
              <i class="fas fa-code"></i>
              View My Work
            </a>
            <a routerLink="/contact" class="btn btn-secondary">
              <i class="fas fa-envelope"></i>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- About Preview -->
    <section class="about-preview">
      <div class="container">
        <div class="grid grid-2">
          <div class="about-content" data-aos="fade-right">
            <h2>Turning Ideas into Real-World Applications</h2>
            <p>
              I'm a versatile and results-driven developer with hands-on experience in building modern web, mobile, and desktop apps. With a strong foundation in full-stack development and a passion for clean, maintainable code, I've delivered tailored software solutions that improve efficiency and drive results for clients across industries.
            </p>
            <div class="stats-grid">
              <div class="stat-item">
                <span #projectsCounter class="stat-number">0</span>
                <span class="stat-label">Projects Completed</span>
              </div>
              <div class="stat-item">
                <span #clientsCounter class="stat-number">0</span>
                <span class="stat-label">Satisfied Clients</span>
              </div>
              <div class="stat-item">
                <span #experienceCounter class="stat-number">0</span>
                <span class="stat-label">Years of Development Experience</span>
              </div>
            </div>
            <a routerLink="/about" class="btn btn-outline">
              <i class="fas fa-user"></i>
              Learn More
            </a>
          </div>
          <div class="about-image" data-aos="fade-left">
            <div class="image-container">
              <div class="image-background"></div>
              <img src="assets/images/Murali.png" alt="Murali P" class="profile-image">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="services-preview">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">Services</span>
          <h2>What I Can Do For You</h2>
          <p>
            I offer comprehensive solutions to help your business thrive in the digital landscape
          </p>
        </div>
        <div class="grid grid-3">
          <div class="service-card" data-aos="fade-up" data-aos-delay="100">
            <div class="service-icon">
              <i class="fas fa-code"></i>
            </div>
            <h3>Web Development</h3>
            <p>Custom websites and web applications built with modern technologies</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Responsive Design</li>
              <li><i class="fas fa-check"></i> Performance Optimization</li>
              <li><i class="fas fa-check"></i> SEO Best Practices</li>
            </ul>
          </div>
          <div class="service-card" data-aos="fade-up" data-aos-delay="200">
            <div class="service-icon">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3>Mobile Development</h3>
            <p>Native and cross-platform mobile applications for iOS and Android</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> Cross-Platform</li>
              <li><i class="fas fa-check"></i> Native Performance</li>
              <li><i class="fas fa-check"></i> Offline Support</li>
            </ul>
          </div>
          <div class="service-card" data-aos="fade-up" data-aos-delay="300">
            <div class="service-icon">
              <i class="fas fa-cloud"></i>
            </div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and serverless applications</p>
            <ul class="service-features">
              <li><i class="fas fa-check"></i> AWS Integration</li>
              <li><i class="fas fa-check"></i> Serverless Architecture</li>
              <li><i class="fas fa-check"></i> Auto Scaling</li>
            </ul>
          </div>
        </div>
        <div class="text-center mt-3">
          <a routerLink="/services" class="btn btn-primary">
            <i class="fas fa-list"></i>
            View All Services
          </a>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="tech-stack">
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">Technologies</span>
          <h2>Technologies I Work With</h2>
          <p>
            I use the latest technologies to build modern and scalable applications
          </p>
        </div>
        <div class="tech-grid">
          <div class="tech-item" data-aos="fade-up" data-aos-delay="100">
            <i class="fab fa-firebase"></i>
            <span>Firebase</span>
          </div>
          <div class="tech-item" data-aos="fade-up" data-aos-delay="200">
            <i class="fab fa-cloudflare"></i>
            <span>Cloudflare</span>
          </div>
          <div class="tech-item" data-aos="fade-up" data-aos-delay="300">
            <i class="fab fa-aws"></i>
            <span>AWS</span>
          </div>
          <div class="tech-item" data-aos="fade-up" data-aos-delay="400">
            <i class="fab fa-google"></i>
            <span>Google ADK</span>
          </div>
          <div class="tech-item" data-aos="fade-up" data-aos-delay="500">
            <i class="fab fa-react"></i>
            <span>React</span>
          </div>
          <div class="tech-item" data-aos="fade-up" data-aos-delay="600">
            <i class="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content text-center" data-aos="fade-up">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let's work together to bring your ideas to life. I'm here to help you
            create something amazing.
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
    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      color: white;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      overflow: hidden;
      background: #111;
    }

    .hero-shape {
      position: absolute;
      border-radius: 50%;
      filter: blur(30px);
      opacity: 0.6;
    }

    .shape1 {
      top: 20%;
      left: 10%;
      width: 600px;
      height: 600px;
      background: linear-gradient(150deg, #7c3aed, #ec4899);
      animation: float 10s ease-in-out infinite alternate;
    }

    .shape2 {
      bottom: 10%;
      right: 5%;
      width: 500px;
      height: 500px;
      background: linear-gradient(220deg, #6d28d9, #3730a3);
      animation: float 12s ease-in-out infinite alternate-reverse;
    }

    .shape3 {
      top: 40%;
      right: 25%;
      width: 300px;
      height: 300px;
      background: linear-gradient(30deg, #be185d, #7c3aed);
      animation: float 8s ease-in-out infinite alternate;
    }

    .overlay-pattern {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
      opacity: 0.15;
      z-index: 2;
    }

    @keyframes float {
      0% {
        transform: translateY(0) scale(1);
      }
      100% {
        transform: translateY(-20px) scale(1.05);
      }
    }

    .hero-content {
      position: relative;
      z-index: 3;
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .badge {
      display: inline-block;
      padding: 0.5rem 1.25rem;
      background: rgba(255, 255, 255, 0.15);
      border-radius: var(--radius-full);
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      font-weight: 500;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .hero-description {
      font-size: 1.25rem;
      margin: 2rem 0;
      color: rgba(255, 255, 255, 0.9);
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      margin-top: 2rem;
    }

    /* About Preview Styles */
    .about-preview {
      position: relative;
      padding: 4rem 0;
      background: #121212; /* Updated to match SCSS file */
      overflow: hidden;
    }

    .about-preview::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(18, 18, 18, 0.8); /* Updated to match new background color */
      backdrop-filter: blur(10px);
      z-index: 1;
    }

    .container {
      position: relative;
      z-index: 2;
    }

    .about-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-right: 2rem;
      color: white;

      @media (max-width: 768px) {
        padding-right: 0;
        text-align: center;
      }
    }

    .about-content h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      color: white;
      line-height: 1.2;
      text-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }

    .about-content p {
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 2rem;
      line-height: 1.6;
    }

    .stats-grid {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;
      gap: 1rem;

      @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
      }
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 3rem;
      font-weight: 700;
      color: #6366f1; /* Indigo color for better contrast */
      margin-bottom: 0.5rem;
      line-height: 1;
      text-shadow: 0 4px 6px rgba(0,0,0,0.2);
    }

    .stat-label {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.875rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .about-image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      perspective: 1000px;

      .image-container {
        position: relative;
        max-width: 400px;
        width: 100%;
        aspect-ratio: 1 / 1;
        border-radius: 20px;
        overflow: hidden;
        box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        transform: rotateY(-5deg);
        transition: all 0.5s ease;

        &:hover {
          transform: rotateY(-10deg) scale(1.05);
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
        }
      }

      .image-background {
        position: absolute;
        top: -20px;
        left: -20px;
        right: -20px;
        bottom: -20px;
        background: rgba(99, 102, 241, 0.1);
        filter: blur(10px);
        z-index: 1;
      }

      .profile-image {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        width: 125%;
        height: 125%;
        object-fit: cover;
        object-position: center top;
        z-index: 2;
      }
    }

    /* Services Preview */
    .services-preview {
      background-color: rgba(20, 20, 20, 0.5);
      position: relative;
    }

    .services-preview h2 {
      color: white;
    }

    .services-preview p {
      color: rgba(255, 255, 255, 0.8);
    }

    .service-card {
      background: rgba(30, 30, 30, 0.6);
      padding: 2rem;
      border-radius: var(--radius);
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .service-card:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      background: rgba(40, 40, 40, 0.8);
      border-color: rgba(124, 58, 237, 0.3);
    }

    .service-card h3 {
      color: white;
      text-align: left;
    }

    .service-card p {
      color: rgba(255, 255, 255, 0.7);
    }

    .service-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
      color: white;
      border-radius: var(--radius);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 10px 15px -3px rgba(124, 58, 237, 0.2);
    }

    .service-features {
      list-style: none;
      margin-top: 1.5rem;
    }

    .service-features li {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      color: rgba(255, 255, 255, 0.7);
    }

    .service-features i {
      color: var(--success-color);
    }

    /* Tech Stack */
    .tech-stack {
      background-color: var(--dark-bg);
    }

    .tech-stack h2 {
      color: white;
    }

    .tech-stack p {
      color: rgba(255, 255, 255, 0.8);
    }

    .tech-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .tech-item {
      background: rgba(30, 30, 30, 0.6);
      padding: 2rem;
      border-radius: var(--radius);
      text-align: center; /* Keep this centered as it's appropriate for tech items */
      box-shadow: var(--shadow);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.05);
    }

    .tech-item:hover {
      transform: translateY(-5px);
      box-shadow: var(--shadow-lg);
      background: rgba(40, 40, 40, 0.8);
      border-color: rgba(124, 58, 237, 0.3);
    }

    .tech-item i {
      font-size: 2.5rem;
      color: var(--primary-color);
      margin-bottom: 1rem;
    }

    .tech-item span {
      display: block;
      color: white;
      font-weight: 500;
    }

    /* CTA Section */
    .cta {
      background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 600px;
      margin: 0 auto;
    }

    .cta h2 {
      color: white;
      margin-bottom: 1rem;
    }

    .cta p {
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        padding: 0 1rem;
      }

      .hero-buttons {
        flex-direction: column;
      }

      .stats-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
      }

      .about-image {
        margin-top: 2rem;
      }
    }
  `]
})
export class HomeComponent implements OnInit, AfterViewInit {
  @ViewChildren('projectsCounter, clientsCounter, experienceCounter') 
  counterElements!: QueryList<ElementRef>;

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

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initCounters();
    }
  }

  private initCounters() {
    const counters = [
      { element: this.counterElements.toArray()[0], target: 10, duration: 1500 },
      { element: this.counterElements.toArray()[1], target: 5, duration: 1500 },
      { element: this.counterElements.toArray()[2], target: 1, duration: 1500 }
    ];

    counters.forEach(counter => {
      this.animateCounter(
        counter.element.nativeElement, 
        0, 
        counter.target, 
        counter.duration
      );
    });
  }

  private animateCounter(
    element: HTMLElement, 
    start: number, 
    end: number, 
    duration: number
  ) {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentValue = Math.floor(progress * (end - start) + start);
      
      element.textContent = currentValue.toString() + (currentValue === end ? '+' : '');
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }
}
