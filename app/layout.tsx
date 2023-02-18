import { getServerSession } from "next-auth";
import ClientProvider from "../components/ClientProvider";
import Login from "../components/Login";
import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import { authOptions } from "../pages/api/auth/[...nextauth]";

import "../styles/globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex">
              <div className="bg-customGraySideBar max-w-xs h-screen overflow-y-auto md:min-w-[15rem]">
                <SideBar />
              </div>

              <ClientProvider />

              <div className="bg-customGrayMain flex-1">{children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
