"use client";

export default function ContactForm() {
  return (
    <form 
      action="https://formspree.io/f/mpqwvoqp" 
      method="POST"
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        Send Message
      </button>
    </form>
  );
}
