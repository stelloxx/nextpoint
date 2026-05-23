// API integration layer — swap mock data for real endpoints here
import { tours, routes, places, initialMessages, profile, friends, activities } from './data';
import type { Tour, Route, Place, ChatMessage, UserProfile, Friend, Activity } from '../types';

export async function fetchTours(_cityId?: string): Promise<Tour[]> {
  return tours;
}

export async function fetchRoutes(): Promise<Route[]> {
  return routes;
}

export async function fetchPlaces(_cityId?: string): Promise<Place[]> {
  return places;
}

export async function fetchChatHistory(): Promise<ChatMessage[]> {
  return initialMessages;
}

export async function sendChatMessage(_text: string): Promise<ChatMessage> {
  // TODO: wire to real AI endpoint
  return {
    id: crypto.randomUUID(),
    sender: 'bot',
    text: "I'm thinking about that... (API not connected yet)",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    type: 'text',
  };
}

export async function fetchProfile(): Promise<UserProfile> {
  return profile;
}

export async function fetchFriends(): Promise<Friend[]> {
  return friends;
}

export async function fetchActivities(): Promise<Activity[]> {
  return activities;
}
