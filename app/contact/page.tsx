'use client';

import { supabase } from "@/lib/utils/supabase";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // FIXED: Changed {{ name, email, message }} to { name, email, message }
    const { error } = await supabase
      .from('contact_messages')
      .insert({ name, email, message });

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    }
    setLoading(false);
  };

  return (
    <main className="max-w-[800px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-12 text-gray-600">Have a project in mind or just want to chat? Send me a message below.</p>
      
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="w-full p-3 border rounded-lg"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full p-3 border rounded-lg" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea className="w-full p-3 border rounded-lg h-32" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can I help you?"></textarea>
        </div>
        
        {/* FIXED: Button syntax corrected to use proper React attributes and children */}
        <button 
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          disabled={loading}
          type="submit"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && <p className="text-green-600 mt-4">Message sent successfully!</p>}
        {status === 'error' && <p className="text-red-600 mt-4">Failed to send message. Please try again.</p>}
      </form>
    </main>
  );
}