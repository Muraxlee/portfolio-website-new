import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeminiService } from './gemini.service';

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
 * Service to handle chat functionality
 */
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  // Stream of chat messages
  private messages = new BehaviorSubject<ChatMessage[]>([]);
  private nextId = 1;

  constructor(private geminiService: GeminiService) { }

  /**
   * Get observable of chat messages
   */
  getMessages(): Observable<ChatMessage[]> {
    return this.messages.asObservable();
  }

  /**
   * Add a user message and generate a bot response
   */
  async addUserMessage(text: string): Promise<void> {
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

    // Generate AI response
    try {
      const botResponseText = await this.geminiService.generateResponse(text);
      
      // Create and add bot message
      const botMessage: ChatMessage = {
        id: this.nextId++,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };

      const updatedMessages = this.messages.getValue();
      this.messages.next([...updatedMessages, botMessage]);
    } catch (error) {
      console.error('Error generating bot response:', error);
      const errorMessage: ChatMessage = {
        id: this.nextId++,
        text: "Sorry, I'm having trouble generating a response right now.",
        sender: 'bot',
        timestamp: new Date()
      };
      const updatedMessages = this.messages.getValue();
      this.messages.next([...updatedMessages, errorMessage]);
    }
  }

  /**
   * Clear all chat messages
   */
  clearChat(): void {
    this.messages.next([]);
  }
}
