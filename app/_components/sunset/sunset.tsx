"use client";

import { useGlobalContext } from "@/app/_context/globalContext";
import { sunset } from "@/app/_utils/icons";
import { unixToTime } from "@/app/_utils/misc";
import { Skeleton } from "@/components/ui/skeleton";
import { unix } from "moment";
import React from "react";

function Sunset() {
  const { forecast } = useGlobalContext();

  if (!forecast || !forecast?.sys || !forecast?.sys?.sunset) {
    return <Skeleton className="h-[12rem] w-full col-span-2" />;
  }

  const times = forecast?.sys?.sunset;
  const timezone = forecast?.timezone;

  const sunseTime = unixToTime(times, timezone);
  const sunrise = unixToTime(forecast?.sys?.sunrise, timezone);
  return (
    <div className="pt-6 pb-5 px-4 h-[12rem] border rounded-lg flex flex-col gap-8 dark:bg-dark-grey shadow-sm dark:shadow-none">
      <div className="top">
        <h2 className="flex items-center gap-2 font-medium">{sunset}Sunset</h2>
        <p className="pt-4 text-2xl">{sunseTime}</p>
      </div>
      <p>Sunrise: {sunrise}</p>
    </div>
  );
}

export default Sunset;
