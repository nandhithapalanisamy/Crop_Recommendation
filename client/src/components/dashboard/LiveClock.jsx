import React, { useEffect, useState } from "react";

export default function LiveClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {

      setTime(new Date());

    },1000);

    return ()=>clearInterval(timer);

  },[]);

  return (

    <div className="bg-white rounded-3xl shadow-lg p-6">

      <h2 className="text-xl font-bold">

        🕒 Current Time

      </h2>

      <h1 className="text-4xl mt-5 font-bold text-green-600">

        {time.toLocaleTimeString()}

      </h1>

      <p className="mt-3">

        {time.toDateString()}

      </p>

    </div>

  );

}