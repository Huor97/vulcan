"use client";

import React from "react";

interface TelegramButtonProps {
  username?: string;
  className?: string;
}

export function TelegramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
    </svg>
  );
}

export default function TelegramButton({
  username = "vulcaninternational",
  className = "",
}: TelegramButtonProps) {
  const cleanUsername = username.replace(/^@/, "");

  return (
    <>
      <a
        href={`https://t.me/${cleanUsername}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        aria-label="Telegram"
        title={`Contact @${cleanUsername} on Telegram`}
        className={`tg-round-btn mt-2 sm:mt-2.5 opacity-0 group-hover:opacity-100 group-data-[active=true]:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto group-data-[active=true]:pointer-events-auto z-50 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 !rounded-full overflow-hidden bg-white/10 hover:bg-[#229ED9] text-gray-200 hover:text-white backdrop-blur-sm hover:scale-110 active:scale-95 shadow-sm ${className}`}
        style={{ borderRadius: "9999px" }}
      >
        <TelegramIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
      </a>
      <style>{`
        .tg-round-btn {
          border-radius: 9999px !important;
        }
      `}</style>
    </>
  );
}
