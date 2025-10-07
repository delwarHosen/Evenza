"use client"

import { addInterestedEvent } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({ eventId, interestedUserId, goingUserIds, fromDetails }) => {
  const { auth } = useAuth();
  const router = useRouter();
  const interested = interestedUserId?.find(id => id === auth?.id);
  const isGoing = goingUserIds?.find(id => id === auth?.id);

  const [isInterested, setInInterested] = useState(interested);
  const [going, setGoing] = useState(isGoing);
  const [isPending, startTransition] = useTransition();

  async function toggleInterestedEvent() {
    if (auth) {
      await addInterestedEvent(eventId, auth?.id);
      setInInterested(!interested)
    } else {
      router.push("/login")
    }
  }

  const markGoing = () => {
    if (auth) {
      router.push(`/payment/${eventId}`)
    } else {
      router.push("/login")
    }
  }

  return (
    <div className={`w-full flex gap-4 mt-4 ${fromDetails && "flex-1"}`}>
      <button
        onClick={() => startTransition(() => toggleInterestedEvent())}
        className={`w-full ${isInterested && "bg-indigo-600 hover:bg-indigo-800"}`}>
        Interested
      </button>
      <button
      disabled={auth && going}
        onClick={markGoing}
        href="/payment"
        className=" text-center w-full bg-[#464849] py-2 px-2 rounded-md border border-[#5F5F5F]/50 shadow-sm cursor-pointer hover:bg-[#3C3D3D] transition-colors active:translate-y-1"
      >
        Going add
      </button>
    </div>
  );
};

export default ActionButtons;
