# EventSync - Event Planning App

## Tech Stack:

- Frontend: React Native with TypeScript, Expo, and Expo Router
- Backend/Database: Express.js, PostgreSQL, Typescript, Prisma
- UI Framework: React Native Paper
- AI Processing: DeepSeek

## 1. Introduction

This document outlines the structured flow and key features of the EventSync app to guide mobile app developers in implementation.

---

## 2. User Flow

### 2.1 Welcome Screen

- Displays a clean UI with options to **Sign Up** or **Log In**.
- Users can authenticate using **Email/Password** or **Social Login** (Google, Apple, Facebook, etc.).
- Password requirements and validation rules clearly displayed
- "Forgot Password" functionality available

### 2.2 Onboarding

- Optional guided tutorial explaining core features: **creating events, inviting guests, and managing events**.
- Quick walkthrough with skip option.
- Personalization steps: timezone selection, notification preferences, calendar sync permissions

### 2.3 Main Dashboard

Upon successful authentication, users land on the main dashboard:

- **Upcoming Events**: List of events the user has created or been invited to.
  - Quick filters for "Hosting", "Attending", and "Pending Response"
  - Search functionality for events
- **Past Events**: List of previous events.
- **Create New Event** button prominently placed.
- **Notifications Icon**: Shows RSVP changes, new messages, and event reminders.
- **Profile & Settings**: Manage user details, preferences, and app settings.

---

## 3. Event Creation Flow

### 3.1 Creating a New Event

Users can create a new event by filling in:

- **Event Name**
- **Date & Time** (integrated with smart scheduling suggestions)
- **Location** (Google Maps API integration)
- **Event Description** (optional details about the event)
- **Privacy Settings** (Public, Private, or Invite-Only)

### 3.2 Sending Invitations

Users can invite guests through:

- **Contacts Sync** (fetch phone contacts for easy invites)
- **Email Invitations** (send invites directly via email)
- **Shareable Link** (generate an event-specific link to invite others)

---

## 4. Guest Experience

### 4.1 RSVP System

Guests receive an invite and can:

- Accept ✅
- Decline ❌
- Maybe 🤔

### 4.2 In-Event Chat

- Real-time messaging for event attendees.
- Image, video, and document sharing.
- Emoji reactions & GIF support.

### 4.3 Media Sharing

- Attendees can upload photos/videos to the event's shared gallery.
- Moderation tools for event hosts to remove content.

---

## 5. Notifications & Real-Time Updates

- **Push Notifications** for:
  - RSVP status changes
  - New chat messages
  - Event reminders
  - Updates from event host
- **In-App Notifications** for real-time engagement.
- **Socket.io Integration** for live updates.

---

## 6. Calendar Sync & Smart Scheduling

- Sync with **Google Calendar, Apple Calendar, Outlook**.
- **AI-Powered Smart Suggestions**:
  - Detect conflicts with existing calendar events.
  - Recommend best available time slots based on invitees' schedules.
  - Suggest nearby venues based on event type.

---

## 7. Additional Features

- **Dark Mode Support** 🌙
- **Multi-Language Support** 🌍
  - Initial support for English, Mongolian
  - Language detection based on device settings
- **QR Code Check-in** for event entry verification.
- **Host Analytics Dashboard** to track RSVPs, engagement, and event insights.
- **Offline Support**
  - Cache event details for offline viewing
  - Queue actions to sync when back online
- **Accessibility Features**
  - Screen reader compatibility
  - Dynamic text sizing
  - High contrast mode

---

## 8. Tech Stack Recommendations

### **Frontend**

- **React Native** (for cross-platform mobile development)
  - React Native Navigation for routing
  - React Native Elements for UI components
- **Redux / Zustand** (for state management)
- **Socket.io** (for real-time updates)

### **Backend**

- **Node.js + Express** (for API services)
- **PostgreSQL** (for relational data management)
- **Redis** (for caching and real-time features)

### **Integrations**

- **Firebase / OneSignal** (for push notifications)
- **Google Maps API** (for location selection)
- **Twilio / SendGrid** (for SMS & email invitations)
- **Cloudinary / S3** (for media storage)

---

## 9. Database Schema (Prisma)

```prisma
// User model
model User {
id String @id @default(uuid())
email String @unique
passwordHash String
fullName String
avatarUrl String?
timezone String?
language String @default("en")
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
// Relations
hostedEvents Event[] @relation("EventHost")
eventInvitations EventInvitation[]
chatMessages ChatMessage[]
mediaUploads EventMedia[]
notifications Notification[]
}
// Event model
model Event {
id String @id @default(uuid())
hostId String
title String
description String?
startTime DateTime
endTime DateTime
locationName String?
latitude Float?
longitude Float?
privacySetting String @default("private")
maxAttendees Int?
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
// Relations
host User @relation("EventHost", fields: [hostId], references: [id])
invitations EventInvitation[]
media EventMedia[]
chatMessages ChatMessage[]
notifications Notification[]
}
// Event Invitation model
model EventInvitation {
id String @id @default(uuid())
eventId String
userId String
email String?
status String @default("pending")
inviteCode String @unique
createdAt DateTime @default(now())
updatedAt DateTime @updatedAt
// Relations
event Event @relation(fields: [eventId], references: [id])
user User @relation(fields: [userId], references: [id])
}
// Event Media model
model EventMedia {
id String @id @default(uuid())
eventId String
userId String
mediaType String
mediaUrl String
thumbnailUrl String?
createdAt DateTime @default(now())
// Relations
event Event @relation(fields: [eventId], references: [id])
user User @relation(fields: [userId], references: [id])
}
// Chat Message model
model ChatMessage {
id String @id @default(uuid())
eventId String
userId String
messageText String?
mediaUrl String?
mediaType String?
createdAt DateTime @default(now())
// Relations
event Event @relation(fields: [eventId], references: [id])
user User @relation(fields: [userId], references: [id])
}
// Notification model
model Notification {
id String @id @default(uuid())
userId String
eventId String
type String
message String
isRead Boolean @default(false)
createdAt DateTime @default(now())
// Relations
user User @relation(fields: [userId], references: [id])
event Event @relation(fields: [eventId], references: [id])
}
```

## 10. Project Structure

eventsync/
├── mobile/
│ ├── app/ # Expo Router pages
│ │ ├── (auth)/ # Authentication routes
│ │ │ ├── login.tsx
│ │ │ ├── register.tsx
│ │ │ └── forgot-password.tsx
│ │ ├── (main)/ # Main app routes
│ │ │ ├── events/ # Event-related screens
│ │ │ ├── profile/ # Profile screens
│ │ │ └── settings/ # Settings screens
│ │ └── layout.tsx
│ ├── components/
│ │ ├── common/
│ │ │ ├── Button.tsx
│ │ │ ├── Input.tsx
│ │ │ └── Loading.tsx
│ │ ├── events/
│ │ │ ├── EventCard.tsx
│ │ │ └── EventForm.tsx
│ │ └── forms/
│ ├── hooks/
│ │ ├── useAuth.ts
│ │ └── useEvents.ts
│ ├── services/
│ │ ├── api.ts
│ │ └── socket.ts
│ ├── store/
│ │ ├── auth.ts
│ │ └── events.ts
│ ├── types/
│ │ └── index.ts
│ └── utils/
│ ├── date.ts
│ └── validation.ts
│
├── server/
│ ├── src/
│ │ ├── config/
│ │ │ ├── prisma.ts
│ │ │ └── env.ts
│ │ ├── controllers/
│ │ │ ├── auth.controller.ts
│ │ │ └── events.controller.ts
│ │ ├── middleware/
│ │ │ ├── auth.middleware.ts
│ │ │ └── validation.middleware.ts
│ │ ├── prisma/
│ │ │ ├── schema.prisma
│ │ │ └── migrations/
│ │ ├── routes/
│ │ │ ├── auth.routes.ts
│ │ │ └── events.routes.ts
│ │ ├── services/
│ │ │ ├── auth.service.ts
│ │ │ └── events.service.ts
│ │ ├── types/
│ │ │ └── index.ts
│ │ └── utils/
│ │ ├── jwt.ts
│ │ └── password.ts
│ ├── tests/
│ │ ├── auth.test.ts
│ │ └── events.test.ts
│ └── docs/
│ └── api.md
│
├── shared/
│ ├── constants/
│ │ ├── events.ts
│ │ └── validation.ts
│ ├── types/
│ │ └── index.ts
│ └── utils/
│ └── helpers.ts
│
└── docs/
├── api/
├── deployment/
└── context.md

## 11. Conclusion

This structured flow ensures a seamless user experience while leveraging modern technologies for scalability and real-time engagement. The app simplifies event planning, making it interactive and efficient for both hosts and guests.
