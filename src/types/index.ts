export type Screen = 'map' | 'tours' | 'routes' | 'chat' | 'profile';

export interface City {
  id: string;
  name: string;
  country: string;
}

export interface Tour {
  id: string;
  name: string;
  city: string;
  duration: string;
  type: string;
  price: number | null; // null = free
  rating: number;
  hashtags: string[];
  imageUrl: string;
  guideId?: string;
}

export interface Route {
  id: string;
  name: string;
  date: string;
  status: 'completed' | 'in-progress' | 'not-started';
  stops: number;
  distance: string;
  start: string;
  end: string;
}

export interface Place {
  id: string;
  name: string;
  distance: string;
  imageUrl: string;
  lat: number;
  lng: number;
}

export interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  type: 'text' | 'quick-action';
  quickActions?: QuickAction[];
}

export interface QuickAction {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface UserProfile {
  name: string;
  handle: string;
  avatarUrl: string;
  proExpiry: string;
  interests: string[];
  tours: number;
  checkins: number;
  cities: number;
}

export interface Friend {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Activity {
  id: string;
  friendName: string;
  friendAvatarUrl: string;
  action: string;
  time: string;
}
