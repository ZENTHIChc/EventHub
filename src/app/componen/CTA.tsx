import React from 'react';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <div className="w-full mx-auto px-6 py-12">
      <div className="w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-orange-500 rounded-xl px-8 py-30 text-center">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Siap Memulai Petualangan Event-mu?
      </h2>
      
      <p className="text-white text-lg md:text-xl mb-8 max-w-3xl mx-auto">
        Bergabunglah dengan ribuan pengguna yang sudah merasakan kemudahan Eventora
      </p>
      
      <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/20 hover:bg-white/30 border-2 border-white text-white font-bold rounded-xl transition backdrop-blur-sm text-lg">
        <MessageCircle className="w-6 h-6" />
        Live Chat Support
      </button>
      </div>
    </div>
  );
};
export default CTA;