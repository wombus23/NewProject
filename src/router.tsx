import { createBrowserRouter } from "react-router-dom";

import {
  HomePage,
  AboutPage,
  LoginPage,
  SignupPage,
  ContactPage,
  NewChatPage,
  ChatsPage,
  SavedChatsPage,
  SearchPage,
} from "@/pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/dashboard/chat",
    element: <NewChatPage />,
  },
  {
    path: "/dashboard/chats",
    element: <ChatsPage />,
  },
  {
    path: "/dashboard/saved",
    element: <SavedChatsPage />,
  },
  {
    path: "/dashboard/search",
    element: <SearchPage />,
  },
]);

export default router;
