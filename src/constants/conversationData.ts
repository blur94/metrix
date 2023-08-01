import Jane from "@/assets/message/jane-done.png";
import Janet from "@/assets/message/janet-adebayo.png";
import Kunle from "@/assets/message/kunle-adekunle.png";

export const conversationList = [
  {
    id: "conversation1",
    participant: {
      id: "user1",
      name: "Jane Doe",
      image: Jane,
      online: true,
      status: "2",
    },
    messages: [
      {
        id: "message1",
        sender: "user1",
        content: "Hello there!",
        timestamp: "2023-07-30T12:30:00Z",
      },
      {
        id: "message2",
        sender: "currentUser",
        content: "Hi! How are you?",
        timestamp: "2023-07-30T12:31:00Z",
      },
      // More messages...
    ],
  },
  {
    id: "conversation2",
    participant: {
      id: "user3",
      name: "Janet Adebayo",
      image: Janet,
      online: false,
      status: "new",
    },
    messages: [
      {
        id: "message3",
        sender: "currentUser",
        content: "Hey, how's it going?",
        timestamp: "2023-07-30T13:15:00Z",
      },
      {
        id: "message4",
        sender: "user3",
        content: "I'm doing great, thanks!",
        timestamp: "2023-07-30T13:16:00Z",
      },
    ],
  },
  {
    id: "conversation3",
    participant: {
      id: "user4",
      name: "Kunle Adekunle",
      image: Kunle,
      online: true,
      status: "2",
    },
    messages: [
      {
        id: "message3",
        sender: "user1",
        content: "Hey, how's it going?",
        timestamp: "2023-07-30T13:15:00Z",
      },
      {
        id: "message4",
        sender: "currentUser",
        content: "I'm doing great, thanks!",
        timestamp: "2023-07-30T13:16:00Z",
      },
      // More messages...
    ],
  },
];

export const users = [
  {
    id: "user1",
    name: "John",
    image: Jane,
  },
  {
    id: "user2",
    name: "Alice",
    image: Janet,
  },
  {
    id: "user3",
    name: "Bob",
    image: Kunle,
  },
];
