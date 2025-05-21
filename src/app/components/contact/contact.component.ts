import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="contact">
      <div class="hero-background" data-aos="fade-in">
        <div class="hero-shape shape1" data-aos="fade-right"></div>
        <div class="hero-shape shape2" data-aos="fade-down"></div>
        <div class="hero-shape shape3" data-aos="fade-left"></div>
        <div class="overlay-pattern"></div>
      </div>
      <div class="container">
        <div class="section-header" data-aos="fade-up">
          <span class="section-subtitle">Get In Touch</span>
          <h2>Contact Me</h2>
          <p>
            Have a project in mind? Let's discuss how I can help bring your ideas to life
          </p>
        </div>
        <div class="contact-content">
          <div class="contact-info" data-aos="fade-right">
            <h3>Let's Connect</h3>
            <p>Feel free to reach out through any of the following channels and I'll get back to you as soon as possible.</p>

            <div class="contact-method">
              <div class="contact-icon">
              <i class="fas fa-envelope"></i>
              </div>
              <div class="contact-details">
                <h4>Email</h4>
                <a href="mailto:email&#64;example.com">email&#64;example.com</a>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">
              <i class="fas fa-phone"></i>
              </div>
              <div class="contact-details">
                <h4>Phone</h4>
                <span>+1 234 567 890</span>
              </div>
            </div>

            <div class="contact-method">
              <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
              </div>
              <div class="contact-details">
                <h4>Location</h4>
                <span>Your Location</span>
              </div>
            </div>
          </div>

          <div class="contact-form" data-aos="fade-left">
            <h3>Send Me a Message</h3>
            <div class="form-group">
              <label for="name">Name</label>
              <input id="name" type="text" class="form-control" placeholder="Your Name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input id="email" type="email" class="form-control" placeholder="Your Email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" class="form-control" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" class="submit-btn">
              <i class="fas fa-paper-plane"></i>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @use '../home/home.component.scss' as home;

    .contact {
      position: relative;
      padding-top: 8rem;
      padding-bottom: 6rem;
      min-height: 100vh;
      z-index: 1;
      color: white;
    }

    .section-header, .contact-content {
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
      color: var(--primary-color);
      font-weight: 600;
      display: block;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 0.875rem;
      text-align: center;
    }

    .contact-section {
      position: relative;
      padding-top: 8rem;
      padding-bottom: 6rem;
      min-height: 100vh;
      z-index: 1;
    }

    .container {
      position: relative;
      z-index: 2;
    }

    h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      color: white;
      position: relative;
      z-index: 2;
    }

    .contact-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .contact-info h3 {
      color: white;
      font-size: 1.75rem;
      margin-bottom: 1rem;
      font-weight: 600;
      text-align: left;
    }

    .contact-info p {
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      line-height: 1.7;
    }

    .contact-method {
        display: flex;
        align-items: center;
      gap: 1rem;
      padding: 1.25rem;
      background-color: #33304b;
      border-radius: var(--radius-md);
      transition: all 0.3s ease;
    }

    .contact-method:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
      background-color: #3e3a5a;
    }

    .contact-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 3rem;
      height: 3rem;
      background-color: rgba(124, 58, 237, 0.2);
      border-radius: 50%;
      color: #7c3aed;
      font-size: 1.25rem;
    }

    .contact-details h4 {
      color: white;
      font-weight: 600;
      margin-bottom: 0.25rem;
        }

    .contact-details a, .contact-details span {
      color: rgba(255, 255, 255, 0.9);
      transition: color 0.2s ease;
        }

    .contact-details a:hover {
      color: #7c3aed;
    }

    .contact-form {
      background-color: #33304b;
      padding: 2rem;
      border-radius: var(--radius-lg);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }

    .contact-form h3 {
      color: white;
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      font-weight: 600;
      text-align: left;
    }

      .form-group {
      margin-bottom: 1.25rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);
    }

    .form-control {
          width: 100%;
      padding: 0.75rem 1rem;
      border-radius: var(--radius-md);
      border: 1px solid rgba(124, 58, 237, 0.3);
      background-color: rgba(255, 255, 255, 0.05);
      color: white;
      transition: all 0.3s ease;
    }

    .form-control:focus {
            outline: none;
      border-color: #7c3aed;
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.3);
          }

    textarea.form-control {
      resize: vertical;
      min-height: 120px;
      }

    .submit-btn {
      background-color: #7c3aed;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: var(--radius-md);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      }

    .submit-btn:hover {
      background-color: #6d28d9;
      transform: translateY(-2px);
    }

    @media (max-width: 768px) {
      .contact-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1000,
        once: false,
        offset: 100,
        delay: 0,
        easing: 'ease-in-out',
        disable: 'mobile'
      });
      setTimeout(() => {
        AOS.refresh();
      }, 200);
    }
  }
}
// export class ContactComponent {}
