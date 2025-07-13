import { Injectable } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private aboutMeContext = `
    About Murali P:
    - Full-Stack Developer with 1+ year of experience
    - Specializes in web, mobile, and desktop applications
    - Skills: C, C++, C#, Python, HTML5, CSS3, React Native, Node.js
    - Technologies: PostgreSQL, SQLite, Firestore, Firebase, Git, Docker
    - AI & Automation: n8n, Google AI SDK
    - Location: Thanjavur, Tamil Nadu, India
    - Languages: English (Professional), Tamil (Native), Hindi (Basic)
    - Approach: Understand problems, design with purpose, build with quality
    - Completed 10+ projects, worked with 5+ happy clients
  `;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.geminiApiKey);
  }

  async generateResponse(userQuery: string): Promise<string> {
    try {
      const model = this.genAI.getGenerativeModel({ model: "gemini-pro"});
      
      const prompt = `
        Context: ${this.aboutMeContext}
        
        User Query: ${userQuery}
        
        Provide a concise, professional response based on the context. 
        If the query is not related to the context, respond accordingly.
      `;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini AI Error:', error);
      return "I'm having trouble processing your request right now. Could you try again?";
    }
  }
} 