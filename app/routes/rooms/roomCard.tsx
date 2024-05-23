import { FC } from "react";

export const RoomCard: FC<{ roomName: string }> = ({ roomName }) => {
    return (
        <div className="flex flex-col w-full py-16 border border-emerald-900 rounded-xl shadow-lg">
            <div className="text-center">
                <h1>{roomName}</h1>
            </div>
        </div>
    );
};
