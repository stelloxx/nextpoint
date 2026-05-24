import type { Tour, Route, Place, ChatMessage, UserProfile, Friend, Activity } from '../types';

// ── Tours ──────────────────────────────────────────────────────────
export const tours: Tour[] = [
  { id: '1', name: 'Harry Potter Walking Tour', city: 'London', duration: '2.5 hours', type: 'Walking', price: 25, rating: 4.9, hashtags: ['History', 'HiddenGems'], imageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&h=400&fit=crop' },
  { id: '2', name: 'Victorian London Architecture Walk', city: 'London', duration: '2 hours', type: 'Walking', price: null, rating: 4.8, hashtags: ['Architecture', 'History'], imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop' },
  { id: '3', name: 'South Bank Art & Culture', city: 'London', duration: '3 hours', type: 'Walking', price: 35, rating: 5.0, hashtags: ['Art', 'Instagram'], imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop' },
  { id: '4', name: 'Royal London Experience', city: 'London', duration: '3.5 hours', type: 'Walking', price: 45, rating: 4.7, hashtags: ['Royal', 'History'], imageUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=800&h=400&fit=crop' },
  { id: '5', name: 'Hidden Gems of East London', city: 'London', duration: '2 hours', type: 'Walking', price: null, rating: 4.9, hashtags: ['HiddenGems', 'Art'], imageUrl: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383?w=800&h=400&fit=crop' },
  { id: '6', name: 'Hyde Park & Nature Walk', city: 'London', duration: '1.5 hours', type: 'Walking', price: null, rating: 4.6, hashtags: ['Nature', 'Instagram'], imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop' },
];

// ── Routes ──────────────────────────────────────────────────────────
export const routes: Route[] = [
  { id: '1', name: 'Harry Potter Walk', date: '12 Apr', status: 'completed', stops: 4, distance: '3.2 km', start: "King's Cross", end: 'Tate Modern' },
  { id: '2', name: 'South Bank Evening', date: '8 Apr', status: 'in-progress', stops: 3, distance: '2.1 km', start: 'London Eye', end: 'Tower Bridge' },
  { id: '3', name: 'Hidden Gems Tour', date: '2 Apr', status: 'not-started', stops: 3, distance: '5.8 km', start: 'Camden Market', end: 'Hyde Park' },
  { id: '4', name: 'Victorian Architecture', date: '28 Mar', status: 'completed', stops: 3, distance: '2.9 km', start: 'Eiffel Tower', end: 'Notre-Dame' },
];

// ── Places (map cards) ──────────────────────────────────────────────
export const places: Place[] = [
  { id: '1', name: 'Hyde Park', distance: '2.5 km', imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=300&fit=crop', lat: 51.5073, lng: -0.1657 },
  { id: '2', name: 'Camden Market', distance: '2.3 km', imageUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=400&h=300&fit=crop', lat: 51.5390, lng: -0.1426 },
];

// ── Chat ──────────────────────────────────────────────────────────
export const initialMessages: ChatMessage[] = [
  { id: '1', sender: 'bot', text: "Hello! I'm your AI Travel Assistant. How can I help you today?", timestamp: '10:30 AM', type: 'text' },
  {
    id: '2', sender: 'bot', text: '', timestamp: '10:30 AM', type: 'quick-action',
    quickActions: [
      { id: 'qa1', title: 'Find a Tour', subtitle: 'Get personalized recommendations', icon: 'search' },
      { id: 'qa2', title: 'Ask About a Place', subtitle: 'Learn about landmarks & spots', icon: 'map-pin' },
      { id: 'qa3', title: 'Contact Support', subtitle: 'Get help with your account', icon: 'message' },
    ],
  },
];

// ── Profile ──────────────────────────────────────────────────────────
export const profile: UserProfile = {
  name: 'Sarah Martinez',
  handle: '@sarah_explorer',
  avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
  proExpiry: 'Dec 15, 2024',
  interests: ['Architecture', 'Food', 'Nature', 'Art', 'Walking', 'London'],
  tours: 12,
  checkins: 28,
  cities: 4,
};

export const friends: Friend[] = [
  { id: '1', name: 'Alex', avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: '2', name: 'Mike', avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
  { id: '3', name: 'Emma', avatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
  { id: '4', name: 'Jack', avatarUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=100&h=100&fit=crop' },
];

export const activities: Activity[] = [
  { id: '1', friendName: 'Alex', friendAvatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', action: 'completed Harry Potter Walk', time: '2h ago' },
  { id: '2', friendName: 'Emma', friendAvatarUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop', action: 'liked London Eye at Sunset', time: '5h ago' },
  { id: '3', friendName: 'Mike', friendAvatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', action: 'checked in at Tower Bridge', time: '1d ago' },
  { id: '4', friendName: 'Jack', friendAvatarUrl: 'https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?w=100&h=100&fit=crop', action: 'saved South Bank Evening Walk', time: '2d ago' },
];

// ── Cities ──────────────────────────────────────────────────────────
export const cities = [
  { id: 'london', name: 'London', country: 'UK' },
  { id: 'paris', name: 'Paris', country: 'France' },
  { id: 'tokyo', name: 'Tokyo', country: 'Japan' },
  { id: 'nyc', name: 'New York', country: 'US' },
];
