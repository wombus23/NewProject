import { Button } from "@/components/ui/button";
import { DashboardLayout } from "@/layouts";
import { UploadIcon, AttachIcon } from "@/components/icons";

const NewChat = () => {
  const _onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    try {
      alert("Submitted!");
      event.preventDefault();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <DashboardLayout>
      <div className="w-full h-[100dvh] p-4 relative">
        <header className="h-[40px] flex items-center p-4 absolute top-0 left-0 bg-neutral-900/80 backdrop-blur-lg w-full">
          <h1 className="font-light text-[16px] text-neutral-500">New Chat</h1>
        </header>
        <div className="chat-area flex flex-col h-[calc(100%-72px)] w-full max-w-[640px] mx-auto gap-4 pt-[40px]">
          <BotMessage />
          <HumanMessage />
        </div>
        <div className="chat-box h-[72px] bg-neutral-900 rounded-xl w-full max-w-[640px] mx-auto">
          <form
            onSubmit={_onSubmit}
            className="h-full flex items-center p-4 gap-2"
          >
            <input
              className=" text-white bg-transparent outline-none flex-grow !h-[72px]"
              type="text"
              placeholder="Ask Qanoon-Bot..."
            />
            <Button
              size={"icon"}
              type="button"
              className="aspect-square text-white rounded-full bg-transparent hover:bg-teal-500 hover:text-white"
            >
              <AttachIcon className="w-[24px] h-[24px]" />
            </Button>
            <Button
              size={"icon"}
              type="submit"
              className="bg-second aspect-square text-white rounded-full bg-neutral-800 hover:bg-primary hover:text-white"
            >
              <UploadIcon className="w-[24px] h-[24px]" />
            </Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

const BotMessage = () => {
  return (
    <div className="bot-message flex gap-2 p-4 bg-secondary/10 text-white rounded-r-2xl rounded-bl-2xl w-full max-w-[460px] me-auto">
      Hi human. How are you? I hope you are doing well. This message is to
      inform you of the great work you are doing. Please keep it up.
    </div>
  );
};

const HumanMessage = () => {
  return (
    <div className="bot-message flex gap-2 p-4 bg-neutral-900 text-white rounded-l-2xl rounded-br-2xl w-full max-w-[460px] ms-auto">
      {'Hi. Thanks Bot :)'}
    </div>
  );
};

export default NewChat;
