
"use client";

import { getWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with ShivFlux on WhatsApp"
      className="group fixed bottom-6 right-5 z-50 sm:bottom-8 sm:right-8"
    >
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />

      {/* WhatsApp Circle */}
      <span
        className="
          relative flex h-14 w-14 items-center justify-center
          rounded-full bg-[#25D366]
          shadow-lg
          transition-all duration-300
          group-hover:scale-110
          group-active:scale-95
        "
      >
        {/* WhatsApp Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-8 w-8"
          fill="white"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 1.768.46 3.428 1.265 4.87L2 22l5.284-1.235A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2Zm0 18.2a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.137.733.75-3.06-.196-.313A8.2 8.2 0 1 1 12 20.2Zm4.49-6.14c-.246-.123-1.455-.718-1.68-.8-.225-.082-.389-.123-.553.123-.164.246-.635.8-.778.963-.143.164-.286.185-.532.062-.246-.123-1.04-.383-1.98-1.222-.732-.653-1.226-1.46-1.37-1.706-.143-.246-.015-.379.108-.502.11-.11.246-.286.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.061-.123-.553-1.332-.758-1.824-.2-.48-.402-.415-.553-.423h-.471c-.164 0-.43.061-.655.307-.225.246-.86.84-.86 2.05 0 1.21.881 2.378 1.004 2.542.123.164 1.735 2.65 4.204 3.716.588.254 1.047.406 1.405.52.591.188 1.129.161 1.554.098.474-.07 1.455-.595 1.66-1.168.205-.574.205-1.066.143-1.168-.061-.103-.225-.164-.471-.287Z"
          />
        </svg>
      </span>
    </a>
  );
}

