import { Component, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { Subscription } from 'rxjs';

/**
 * ChatBot component that provides a floating chat interface
 */
@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss'
})
export class ChatBotComponent implements OnInit, OnDestroy, AfterViewChecked {
  // Public properties for template binding
  messages: ChatMessage[] = [];
  newMessage = '';
  isChatOpen = false;

  // Reference to the chat messages container for scrolling
  @ViewChild('chatMessagesContainer') private messagesContainer?: ElementRef;

  // Reference to the message input field
  @ViewChild('messageInput') private messageInput?: ElementRef;

  private subscription?: Subscription;
  private shouldScroll = false;

  constructor(private chatService: ChatService) {}

  /**
   * Initialize component and subscribe to messages
   */
  ngOnInit(): void {
    this.subscription = this.chatService.getMessages().subscribe(messages => {
      this.messages = messages;
      this.shouldScroll = true;
    });
  }

  /**
   * Scroll to bottom when new messages are added
   */
  ngAfterViewChecked(): void {
    if (this.shouldScroll) {
      this.scrollToBottom();
      this.shouldScroll = false;
    }
  }

  /**
   * Clean up subscriptions when component is destroyed
   */
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  /**
   * Toggle chat window open/closed
   */
  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;

    // Add welcome message when chat is opened for the first time
    if (this.isChatOpen && this.messages.length === 0) {
      this.chatService.addUserMessage('Hello');
    }

    // Focus the input field when chat is opened
    if (this.isChatOpen) {
      setTimeout(() => {
        if (this.messageInput) {
          this.messageInput.nativeElement.focus();
        }
      }, 300);
    }
  }

  /**
   * Send a message if it's not empty
   */
  async sendMessage(): Promise<void> {
    if (this.newMessage.trim()) {
      await this.chatService.addUserMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }

  /**
   * Clear all chat messages
   */
  clearChat(): void {
    this.chatService.clearChat();
  }

  /**
   * Handle input focus event
   */
  onInputFocus(): void {
    this.shouldScroll = true;
  }

  /**
   * Scroll the chat container to the bottom
   */
  private scrollToBottom(): void {
    if (this.messagesContainer) {
      const element = this.messagesContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }
}
