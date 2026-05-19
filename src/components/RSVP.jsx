import React, { useState } from 'react';
import { Gift, Send } from 'lucide-react';
import { useScrollFade } from '../hooks/useScrollFade';

export default function RSVP() {
  const [ref, isVisible] = useScrollFade();
  const [showGift, setShowGift] = useState(false);

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      setMessages([{ name, message, date: new Date().toLocaleDateString() }, ...messages]);
      setName('');
      setMessage('');
    }
  };

  return (
    <section className="py-24 bg-white px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Doa Pengantin Block */}
        <div 
          ref={ref}
          className={`mb-16 text-center bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/20 transition-all duration-1000 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h3 className="text-2xl font-serif text-dark mb-6 border-b border-primary/20 pb-2 inline-block">Doa Pengantin</h3>
          <p className="text-3xl font-arabic text-dark mb-6 leading-loose" dir="rtl" style={{ fontFamily: '"Amiri", "Scheherazade New", serif' }}>
            بَارَكَ اللهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِى خَيْرٍ
          </p>
          <p className="text-base text-gray-600 italic mb-4 leading-relaxed max-w-2xl mx-auto">
            "Semoga Allah memberkahimu di waktu bahagia dan memberkahimu di waktu susah dan semoga Allah menyatukan kalian berdua dalam kebaikan."
          </p>
          <p className="text-sm text-gray-500 font-semibold">
            (HR. Abu Dawud no 2130)
          </p>
        </div>

        <div 
          className={`bg-secondary/10 p-8 md:p-12 rounded-3xl border border-primary/20 shadow-sm transition-all duration-1000 delay-300 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-10">
            <h2 className="text-4xl font-script text-primary mb-4">RSVP & Gift</h2>
            <p className="text-gray-600 font-serif">Kehadiran dan doa restu Anda adalah kado terindah bagi kami.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Best Wishes Form */}
            <div>
              <h3 className="text-2xl font-serif text-dark mb-2 border-b border-primary/20 pb-2">Best Wishes</h3>
              <p className="text-gray-600 mb-6 text-sm">Kirimkan ucapan & do'a restu.</p>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Nama Anda" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Ucapan & Doa</label>
                  <textarea rows="3" value={message} onChange={(e) => setMessage(e.target.value)} required className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary outline-none transition-colors" placeholder="Tuliskan doa untuk kedua mempelai..."></textarea>
                </div>
                <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors flex justify-center items-center gap-2 shadow-sm">
                  <Send size={18} />
                  Kirim Ucapan
                </button>
              </form>

              {/* Messages List */}
              {messages.length > 0 && (
                <div className="mt-8 space-y-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                  {messages.map((msg, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-dark">{msg.name}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Digital Gift */}
            <div>
              <h3 className="text-2xl font-serif text-dark mb-6 border-b border-primary/20 pb-2">Wedding Gift</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tanpa mengurangi rasa hormat, bagi Anda yang ingin memberikan tanda kasih dapat melalui virtual account atau e-wallet di bawah ini:
              </p>
              
              <button 
                onClick={() => setShowGift(!showGift)}
                className="w-full border-2 border-primary text-primary py-3 rounded-lg hover:bg-primary hover:text-white transition-colors flex justify-center items-center gap-2 font-medium"
              >
                <Gift size={20} />
                {showGift ? "Tutup Informasi Amplop Digital" : "Buka Amplop Digital"}
              </button>

              {showGift && (
                <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <p className="font-bold text-gray-800 text-lg">BCA</p>
                    <p className="text-2xl tracking-widest text-primary my-2 font-mono">1234 5678 90</p>
                    <p className="text-sm text-gray-500">a.n Ikhsan Sandi Putra</p>
                  </div>
                   <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <p className="font-bold text-gray-800 text-lg">BRI</p>
                    <p className="text-2xl tracking-widest text-primary my-2 font-mono">5979 0104 0123 533</p>
                    <p className="text-sm text-gray-500">a.n Alma Nur Annisa</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
