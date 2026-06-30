import React from "react";
import { Quote } from "lucide-react";

export default function QuoteCard() {
  return (
    <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-r from-green-700 via-emerald-600 to-lime-500 text-white p-10">

      <div className="flex items-start gap-5">

        <div className="bg-white/20 rounded-full p-4">
          <Quote size={40} />
        </div>

        <div>

          <h2 className="text-3xl font-bold mb-5">
            🌱 Quote of the Day
          </h2>

          <p className="text-2xl leading-10 italic">
            "The ultimate goal of farming is not the growing of crops,
            but the cultivation and perfection of human beings."
          </p>

          <p className="mt-8 text-lg font-semibold text-green-100">
            — Masanobu Fukuoka
          </p>

        </div>

      </div>

    </div>
  );
}