import ChatLayout from "../ChatLyout";
import { getUserConversationsAction } from "@/actions/students/chat/conversation";
import { getConversationAction } from "@/actions/students/chat/conversation";


type PageProps = {
  params: Promise<{
    conversationId: string;
  }>;
};


export default async function ChatPage({
  params,
}: PageProps) {

  const { conversationId } = await params;


  const conversationsResult =
    await getUserConversationsAction();


  const conversationResult =
    await getConversationAction(
      conversationId
    );


 const conversations =
  conversationsResult.success
    ? conversationsResult.data
    : [];


 const messages =
  conversationResult.success
    ? conversationResult.data.messages
    : [];


  return (
    <ChatLayout
      conversationId={conversationId}
      conversations={conversations}
      messages={messages}
    />

  );
}