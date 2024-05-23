import { getAuth } from "@clerk/remix/ssr.server";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";
import { useState, type FC } from "react";
import Navbar from "~/components/Navbar/Navbar";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) return redirect("/sign-in");
  return userId;
};

const rooms = [
  {
    roomId: "1",
    roomName: "Amir's Room",
  },
  {
    roomId: "2",
    roomName: "Billy's Room",
  },
  {
    roomId: "3",
    roomName: "CIS1300",
  },
  {
    roomId: "4",
    roomName: "MATH1200",
  },
  {
    roomId: "5",
    roomName: "CIS2750",
  },
  {
    roomId: "6",
    roomName: "MCS1000",
  },
];

const RoomBtn: FC<{ roomName: string }> = ({ roomName }) => {
  return (
    <div className="flex flex-col w-full py-16 border border-emerald-900 rounded-xl shadow-lg">
      <div className="text-center">
        <h1>{roomName}</h1>
      </div>
    </div>
  );
};

const newRoom = () => {
  return null;
}

export default function Rooms() {
  const [isCreateRoomModalOpen, setIsCreateRoomModalOpen] = useState(true);
  return (
    <div>
      <div className="min-h-screen bg-neutral-950 text-emerald-500">
        <Navbar />
        <div className="flex justify-center w-screen min-h-[calc(100vh-4rem)]">
          <div className="py-16 px-4 flex flex-col items-center gap-8 min-h-full w-2/3 border-x border-emerald-950 ">
            {rooms.map((room) => (
              <RoomBtn key={room.roomId} roomName={room.roomName} />
            ))}
            <button type="button" onClick={newRoom} className="w-fit border border-emerald-900 rounded-full py-1 px-4">New Room</button>
          </div>
        </div>
      </div>
    </div>
  );
}
