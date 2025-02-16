export interface Event {
  id: string;
  title: string;
  type: "party" | "drinks" | "dinner" | "concert";
  date: Date;
  location: string;
  description: string;
  imageUrl?: string;
  attendees: number;
  maxAttendees?: number;
  host: {
    name: string;
    avatarUrl?: string;
  };
}

export const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "Summer Rooftop Party",
    type: "party",
    date: new Date(Date.now() + 86400000 * 2), // 2 days from now
    location: "Sky Lounge, Downtown",
    description:
      "Join us for an unforgettable evening under the stars with great music, drinks, and amazing people!",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    attendees: 45,
    maxAttendees: 100,
    host: {
      name: "Alex Rivera",
      avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    },
  },
  {
    id: "2",
    title: "Cocktail Masterclass",
    type: "drinks",
    date: new Date(Date.now() + 86400000 * 5), // 5 days from now
    location: "Mixology Lab",
    description:
      "Learn the art of cocktail making from expert mixologists. All ingredients and equipment provided.",
    imageUrl: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
    attendees: 12,
    maxAttendees: 15,
    host: {
      name: "Sarah Chen",
      avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  },
  {
    id: "3",
    title: "Live Jazz & Wine",
    type: "concert",
    date: new Date(Date.now() + 86400000 * 7), // 7 days from now
    location: "The Blue Note",
    description:
      "An evening of smooth jazz and fine wines. Featured artist: The James Morrison Quartet.",
    imageUrl: "https://images.unsplash.com/photo-1511192336575-5a79af67a629",
    attendees: 28,
    maxAttendees: 50,
    host: {
      name: "Marcus Johnson",
      avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  },
];
