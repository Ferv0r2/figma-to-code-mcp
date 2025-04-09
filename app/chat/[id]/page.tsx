import Image from 'next/image';
import Link from 'next/link';

interface Message {
  id: string;
  text: string;
  sender: 'me' | 'other';
  name?: string;
}

const messages: Message[] = [
  {
    id: '1',
    text: 'Hey Lucas!',
    sender: 'other',
    name: 'Brooke'
  },
  {
    id: '2',
    text: 'Hi Brooke!',
    sender: 'me',
    name: 'Lucas'
  },
  {
    id: '3',
    text: "How's your project going?",
    sender: 'other'
  },
  {
    id: '4',
    text: "It's going well. Thanks for asking!",
    sender: 'me'
  },
  {
    id: '5',
    text: "No worries. Let me know if you need any help 😉",
    sender: 'other',
    name: 'Brooke'
  },
  {
    id: '6',
    text: "You're the best!",
    sender: 'me',
    name: 'Lucas'
  }
];

export default function ChatPage() {
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
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/back-arrow.svg" alt="Back" width={24} height={24} className="text-[#006FFD]" />
        </Link>
        <h1 className="text-[14px] font-bold">Brooke Davis</h1>
        <div className="w-8 h-8 rounded-2xl bg-[#EAF2FF]" />
      </div>

      {/* Messages */}
      <div className="flex-1 px-4 py-3 space-y-3 bg-white overflow-y-auto">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`flex flex-col ${message.sender === 'me' ? 'items-end' : 'items-start'}`}
          >
            {message.name && (
              <span className="text-xs font-bold mb-1 text-[#71727A]">{message.name}</span>
            )}
            <div 
              className={`px-4 py-3 rounded-2xl max-w-[80%] ${
                message.sender === 'me' 
                  ? 'bg-[#006FFD] text-white rounded-tr-none' 
                  : 'bg-[#F8F9FE] text-[#1F2024] rounded-tl-none'
              }`}
            >
              <p className="text-sm">{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="p-4 bg-white">
        <div className="flex items-center gap-2">
          <button className="p-2">
            <Image src="/images/add-icon.svg" alt="Add" width={24} height={24} className="opacity-40" />
          </button>
          <div className="flex-1 bg-[#F8F9FE] rounded-[71px] flex items-center px-4 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <div className="h-8 flex items-center justify-center bg-white">
        <div className="w-32 h-1 bg-black rounded-full" />
      </div>
    </main>
  );
} 