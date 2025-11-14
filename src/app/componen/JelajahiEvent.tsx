"use client";

import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Komponen Pcard sesuai dengan yang Anda miliki
const Pcard = ({ image, title, organizer, date, location, ticketsLeft, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 bg-gray-300">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm">
            <span className="text-gray-700">{organizer}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-orange-500 mr-2">📅</span>
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-orange-500 mr-2">📍</span>
            <span>{location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <span className="text-orange-500 mr-2">👥</span>
            <span>{ticketsLeft}</span>
          </div>
        </div>
        
        <div className="border-t pt-3">
          <p className="text-xs text-gray-500 mb-1">Mulai dari</p>
          <p className="text-xl font-bold text-gray-800">{price}</p>
        </div>
      </div>
    </div>
  );
};

export default function JelajahiEvent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(8);
  
  const allEvents = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '22 Desember 2022',
      location: 'Jl. canggu,kuta utara',
      ticketsLeft: '5K+ ticket tersisa',
      price: 'Rp 350.000'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '23 Desember 2022',
      location: 'Jl. seminyak,kuta',
      ticketsLeft: '3K+ ticket tersisa',
      price: 'Rp 300.000'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '24 Desember 2022',
      location: 'Jl. legian,kuta',
      ticketsLeft: '4K+ ticket tersisa',
      price: 'Rp 400.000'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '25 Desember 2022',
      location: 'Jl. sunset road,kuta',
      ticketsLeft: '2K+ ticket tersisa',
      price: 'Rp 450.000'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=400&h=300&fit=crop',
      title: 'Stand Up Comedy',
      organizer: 'Raditya Dika',
      date: '26 Desember 2022',
      location: 'Jl. ubud,gianyar',
      ticketsLeft: '6K+ ticket tersisa',
      price: 'Rp 380.000'
    }
  ];

  const visibleEvents = allEvents.slice(0, visibleCount);
  const hasMore = visibleCount < allEvents.length;

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, allEvents.length));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-2">
            Jelajahi <span className="text-yellow-500">Event</span>
          </h1>
          <p className="text-gray-600">Temukan event menarik yang kamu suka!</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari Event"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleEvents.map((event) => (
            <Pcard
              key={event.id}
              image={event.image}
              title={event.title}
              organizer={event.organizer}
              date={event.date}
              location={event.location}
              ticketsLeft={event.ticketsLeft}
              price={event.price}
            />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <button 
            onClick={loadMore}
            className="border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Muat Lebih Banyak
          </button>
        </div>
      )}
    </div>
  );
}