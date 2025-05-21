import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Interface for chat message structure
 */
export interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

/**
 * Type for response categories
 */
type ResponseCategory = 'greeting' | 'about' | 'skills' | 'contact' | 'default';

/**
 * Service to handle chat functionality
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Stream of chat messages
  private messages = new BehaviorSubject<ChatMessage[]>([]);
  private nextId = 1;

  // Predefined bot responses by category
  private botResponses: Record<ResponseCategory, string[]> = {
    greeting: [
      "Hello! How can I help you today?",
      "Hi there! What can I do for you?",
      "Welcome! How may I assist you?"
    ],
    about: [
      "I'm a chatbot designed to help visitors interact with this portfolio website.",
      "I can help answer questions about the portfolio owner's skills and projects.",
      "I'm here to provide information about the services offered."
    ],
    skills: [
      "The portfolio owner specializes in web development, mobile apps, and cloud solutions.",
      "Skills include Angular, React, Node.js, AWS, and Firebase.",
      "Full-stack development is one of the key strengths showcased in this portfolio."
    ],
    contact: [
      "You can use the contact form on the Contact page to get in touch.",
      "Feel free to reach out through the contact information provided on this site.",
      "The best way to connect is through the Contact section of this portfolio."
    ],
    default: [
      "I'm not sure I understand. Could you rephrase that?",
      "Interesting question! Let me think about that.",
      "I don't have that information right now, but you can check the portfolio for more details."
    ]
  };

  constructor() { }

  /**
   * Get observable of chat messages
   */
  getMessages(): Observable<ChatMessage[]> {
    return this.messages.asObservable();
  }

  /**
   * Add a user message and generate a bot response
   */
  addUserMessage(text: string): void {
    if (!text.trim()) return;

    // Create and add user message
    const userMessage: ChatMessage = {
      id: this.nextId++,
      text,
      sender: 'user',
      timestamp: new Date()
    };

    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, userMessage]);

    // Simulate bot thinking time (1 second)
    setTimeout(() => this.generateBotResponse(text), 1000);
  }

  /**
   * Generate a bot response based on user input
   */
  private generateBotResponse(userInput: string): void {
    const input = userInput.toLowerCase();
    let responseCategory: ResponseCategory = 'default';

    // Determine response category based on keywords
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      responseCategory = 'greeting';
    } else if (input.includes('about') || input.includes('who') || input.includes('what')) {
      responseCategory = 'about';
    } else if (input.includes('skill') || input.includes('can') || input.includes('do')) {
      responseCategory = 'skills';
    } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
      responseCategory = 'contact';
    }

    // Get random response from the selected category
    const responses = this.botResponses[responseCategory];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const botResponse = responses[randomIndex];

    // Create and add bot message
    const botMessage: ChatMessage = {
      id: this.nextId++,
      text: botResponse,
      sender: 'bot',
      timestamp: new Date()
    };

    const currentMessages = this.messages.getValue();
    this.messages.next([...currentMessages, botMessage]);
  }

  /**
   * Clear all chat messages
   */
  clearChat(): void {
    this.messages.next([]);
  }
}
