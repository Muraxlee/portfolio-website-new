import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
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
        <div class="content" data-aos="fade-up" data-aos-delay="100">
          <p>
            I'm a passionate Full-Stack Developer with expertise in modern web technologies.
            With a strong foundation in both frontend and backend development, I create
            seamless and efficient web applications that deliver exceptional user experiences.
          </p>
          <div class="skills">
            <div class="skill" data-aos="fade-up" data-aos-delay="200">
              <h3>Frontend</h3>
              <ul>
                <li>Angular</li>
                <li>React</li>
                <li>Vue.js</li>
                <li>TypeScript</li>
                <li>SCSS/SASS</li>
              </ul>
            </div>
            <div class="skill" data-aos="fade-up" data-aos-delay="300">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Python</li>
                <li>Java</li>
                <li>SQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div class="skill" data-aos="fade-up" data-aos-delay="400">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI/CD</li>
                <li>Agile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../home/home.component.scss' as home;

    .about {
      position: relative;
      padding-top: 8rem;
      padding-bottom: 6rem;
      min-height: 100vh;
      z-index: 1;
      color: white;
    }

    .section-header, .about-content {
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
      color: #7c3aed;
      font-weight: 600;
    }

    .content {
      position: relative;
      z-index: 2;
    }

    h2 {
      position: relative;
      z-index: 2;
      text-align: center;
      font-size: 3rem;
      margin-bottom: 3rem;
      color: white;
      font-weight: 600;
    }

    p {
      text-align: center;
      margin-bottom: 3rem;
      line-height: 1.8;
      color: rgba(255, 255, 255, 0.9);
      max-width: 800px;
      margin-left: auto;
      margin-right: auto;
    }

    .skills {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .skill {
      background: #33304b;
      padding: 2rem;
      border-radius: var(--radius-lg);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
      border: 1px solid rgba(124, 58, 237, 0.1);

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
        background: #3e3a5a;
      }

      h3 {
        color: #7c3aed;
        margin-bottom: 1rem;
        text-align: center;
        font-weight: 600;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          padding: 0.5rem 0;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          border-bottom: 1px solid rgba(124, 58, 237, 0.1);

          &:last-child {
            border-bottom: none;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .skills {
        grid-template-columns: 1fr;
      }
    }
  `]
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
