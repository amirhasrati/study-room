import { getAuth } from "@clerk/remix/ssr.server";
import type { ActionFunction, LoaderFunction } from "@remix-run/cloudflare";
import { redirect } from "@remix-run/cloudflare";

import Navbar from "~/components/Navbar/Navbar";
import { RoomCard } from "./roomCard";
import { useState } from "react";
import { Form } from "@remix-run/react";
import { ActionFunctionArgs } from "react-router";

export const loader: LoaderFunction = async (args) => {
    const { userId } = await getAuth(args);
    if (!userId) return redirect("/sign-in");
    return userId;
};

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const roomName = formData.get("roomName");
    return roomName;
}

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

export default function Rooms() {
    const [isNewRoomModalOpen, setNewRoomModalOpen] = useState(false);
    const toggleNewRoomModal = () => {
        setNewRoomModalOpen((isNewRoomModalOpen) => !isNewRoomModalOpen);
    };
    return (
        <div className="flex items-center justify-cente text-neutral-200">
            <div className="min-h-screen bg-neutral-950">
                <div className="sticky top-0 bg-neutral-950">
                    <Navbar />
                </div>
                <div className="flex justify-center w-screen min-h-[calc(100vh-4rem)]">
                    <div className="py-16 w-1/6 flex flex-col items-center">
                        <button type="button" onClick={toggleNewRoomModal} className="w-fit border border-emerald-900 text-lg rounded-md py-2 px-4">
                            New Room
                        </button>
                    </div>
                    <div className="py-16 px-4 flex flex-col items-center gap-8 min-h-full w-2/3 border-x border-emerald-950 ">
                        {rooms.map((room) => (
                            <RoomCard key={room.roomId} roomName={room.roomName} />
                        ))}
                    </div>
                    <div className="w-1/6"></div>
                </div>
            </div>

            {/* New Room Modal */}
            {isNewRoomModalOpen && (
                <div className="flex flex-col absolute top-0">
                    <Form method="post">
                        <input name="roomName" type="text" placeholder="Room Name" />
                        <button type="submit">Create Room</button>
                    </Form>
                </div>
            )}
        </div>
    );
}
