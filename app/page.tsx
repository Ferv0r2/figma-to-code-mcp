import Image from "next/image";
import Link from 'next/link';

interface ChatItem {
  id: string;
  name: string;
  message: string;
  avatar: string;
  unreadCount?: number;
}

const chatList: ChatItem[] = [
  {
    id: '1',
    name: 'Haley James',
    message: 'Stand up for what you believe in',
    avatar: '/images/avatar1.jpg',
    unreadCount: 9
  },
  {
    id: '2', 
    name: 'Nathan Scott',
    message: 'One day you\'re seventeen and planning for someday. And then quietly and without...',
    avatar: '/images/avatar2.jpg'
  },
  {
    id: '3',
    name: 'Brooke Davis',
    message: 'I am who I am. No excuses.',
    avatar: '/images/avatar3.jpg',
    unreadCount: 2
  },
  {
    id: '4',
    name: 'Jamie Scott',
    message: 'Some people are a little different. I think that\'s cool.',
    avatar: '/images/avatar4.jpg'
  },
  {
    id: '5',
    name: 'Marvin McFadden',
    message: 'Last night in the NBA the Charlotte Bobcats quietly made a move that most sports fans...',
    avatar: '/images/avatar5.jpg'
  }
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Status Bar */}
      <div className="h-10 bg-white/80 backdrop-blur-xl flex items-center justify-between px-4">
        <span className="text-[15px] font-semibold">9:41</span>
        <div className="flex items-center gap-2">
          <span className="text-sm">􀙇</span>
          <span className="text-lg">􀛨</span>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="h-12 flex items-center justify-between px-4 bg-white">
        <span className="text-[#006FFD] text-sm font-semibold">Edit</span>
        <h1 className="text-[14px] font-bold">Chats</h1>
        <button className="w-6 h-6">
          <Image src="/images/edit-icon.svg" alt="Edit" width={24} height={24} />
        </button>
      </div>

      {/* Search Bar */}
      <div className="px-4 py-3">
        <div className="bg-[#F8F9FE] rounded-3xl flex items-center px-4 py-3 gap-2">
          <Image src="/images/search-icon.svg" alt="Search" width={20} height={20} className="opacity-40" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent w-full text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 px-2">
        {chatList.map((chat) => (
          <Link href={`/chat/${chat.id}`} key={chat.id}>
            <div className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF2FF] flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-[#1F2024]">{chat.name}</h3>
                <p className="text-xs text-[#71727A] truncate">{chat.message}</p>
              </div>
              {chat.unreadCount && (
                <div className="w-6 h-6 rounded-full bg-[#006FFD] flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-white">{chat.unreadCount}</span>
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* Tab Bar */}
      <div className="h-[88px] bg-white flex items-start justify-around px-4 pt-4">
        <button className="flex flex-col items-center gap-2">
          <Image src="/images/chat-icon.svg" alt="Chats" width={24} height={24} className="text-[#006FFD]" />
          <span className="text-[10px] font-semibold text-[#1F2024]">Chats</span>
        </button>
        <button className="flex flex-col items-center gap-2">
          <Image src="/images/friends-icon.svg" alt="Friends" width={24} height={24} className="opacity-40" />
          <span className="text-[10px] text-[#71727A]">Friends</span>
        </button>
        <button className="flex flex-col items-center gap-2">
          <Image src="/images/settings-icon.svg" alt="Settings" width={24} height={24} className="opacity-40" />
          <span className="text-[10px] text-[#71727A]">Settings</span>
        </button>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
    </main>
  );
}
