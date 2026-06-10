export default function ContactPage() {
  return (
    <main className="max-w-[800px] mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <p className="mb-12 text-gray-600">Have a project in mind or just want to chat? Send me a message below.</p>
      
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input type="text" className="w-full p-3 border rounded-lg" placeholder="Your Name" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input type="email" className="w-full p-3 border rounded-lg" placeholder="your@email.com" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea className="w-full p-3 border rounded-lg h-32" placeholder="How can I help you?"></textarea>
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
          Send Message
        </button>
      </form>
    </main>
  );
}