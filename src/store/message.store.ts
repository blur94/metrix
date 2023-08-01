import { StaticImageData } from "next/image";
import { create } from 'zustand';

interface UserProp {
  id: string;
  name: string;
  image: StaticImageData;
  online: boolean;
  status: string;
}

interface MessageProp {
    user: UserProp | undefined;
    conversations: any[];
    setUser: (user: UserProp) => void;
    setConversations: (conversations: any[]) => void;
}

const Message = create<MessageProp>((set) => ({
    user: undefined,
    conversations: [],
    setUser: (user) => set({user}),
    setConversations: (conversations) => set({conversations}), 
}))

export default Message;