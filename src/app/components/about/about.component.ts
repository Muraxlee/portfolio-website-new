import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="about" id="about">
      <div class="hero-background">
        <div class="hero-shape shape1"></div>
        <div class="hero-shape shape2"></div>
        <div class="hero-shape shape3"></div>
        <div class="overlay-pattern"></div>
      </div>
      <div class="container">
        <h2 data-aos="fade-up">About Me</h2>
        
        <div class="about-section" data-aos="fade-up" data-aos-delay="100">
          <p>
            Hi, I’m <strong>Murali P</strong>, a passionate <strong>Full-Stack Developer</strong> with experience building scalable web, mobile, and desktop applications. From crafting responsive UI to architecting reliable backends, I bring ideas to life with code that’s clean, efficient, and tailored for real-world use.
          </p>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="200">
          <h3 class="section-subtitle">What I Do</h3>
          <ul class="what-i-do-list">
            <li><strong>Web Applications</strong> – Full-stack platforms using Node.js, React, and PostgreSQL</li>
            <li><strong>Mobile Apps</strong> – Cross-platform apps with React Native</li>
            <li><strong>Desktop Software</strong> – Offline-ready tools built with .NET and SQLite</li>
            <li><strong>Automation &amp; APIs</strong> – Custom integrations using n8n, Google Sheets API, and RESTful services</li>
          </ul>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="300">
          <h3 class="section-subtitle">Tech Stack</h3>
          <div class="skills-grid">
            <div class="skill-category">
              <h4>Languages &amp; Frameworks:</h4>
              <p>C#, C++, React Native, Node.js, HTML, CSS, Tailwind CSS</p>
            </div>
            <div class="skill-category">
              <h4>Databases:</h4>
              <p>PostgreSQL, SQLite, Firestore</p>
            </div>
            <div class="skill-category">
              <h4>Tools &amp; Platforms:</h4>
              <p>Git, VS Code, Postman, Windows, Linux, Expo, RDLC, n8n</p>
            </div>
          </div>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="400">
          <h3 class="section-subtitle">My Journey So Far</h3>
          <ul class="journey-list">
            <li>Built and deployed SaaS apps, e-commerce platforms, social media apps, and inventory systems.</li>
            <li>Delivered both frontend and backend with seamless authentication, APIs, and database handling.</li>
            <li>Worked with clients from multiple industries to develop solutions that meet business goals.</li>
            <li>Enjoy solving real-world problems through thoughtful, user-centered development.</li>
          </ul>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="500">
          <h3 class="section-subtitle">My Approach</h3>
          <ul class="approach-list">
            <li><strong>Understand the Problem</strong> – Dig deep into client goals and user needs.</li>
            <li><strong>Design with Purpose</strong> – Prioritize UX and scalability.</li>
            <li><strong>Build with Quality</strong> – Clean code, modular architecture, and performance-focused.</li>
            <li><strong>Deliver &amp; Improve</strong> – Test thoroughly and iterate based on feedback.</li>
          </ul>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="600">
          <h3 class="section-subtitle">Quick Facts</h3>
          <ul class="quick-facts-list">
            <li><strong>Experience:</strong> 1+ Year in full-stack development</li>
            <li><strong>Projects Completed:</strong> 10+</li>
            <li><strong>Happy Clients:</strong> 5+</li>
            <li><strong>Location:</strong> Thanjavur, Tamil Nadu, India</li>
            <li><strong>Languages Spoken:</strong> English, Hindi, Tamil</li>
          </ul>
        </div>
        <hr>

        <div class="about-section" data-aos="fade-up" data-aos-delay="700">
          <h3 class="section-subtitle">Let’s Work Together</h3>
          <p>Whether you're a startup, business owner, or agency—if you need someone to bring your software ideas to life, I’m ready to help.</p>
          <div class="text-center mt-3">
            <a routerLink="/contact" class="btn btn-primary">
              <i class="fas fa-paper-plane"></i>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: [`./about.component.scss`]
})
export class AboutComponent implements OnInit {
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
