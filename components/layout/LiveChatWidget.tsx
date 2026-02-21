"use client";

import { useEffect, useMemo, useState } from "react";

const WELCOME_MESSAGE =
  "Hi! Have a question about securing your system? Ask Feroze directly.";
const OFFLINE_MESSAGE =
  "We typically respond in 2 hours. Leave your email for a faster reply.";

type ChatProvider = "crisp" | "tidio";

declare global {
  interface Window {
    $crisp?: Array<unknown>;
    CRISP_WEBSITE_ID?: string;
    CRISP_READY_TRIGGER?: () => void;
    tidioChatApi?: {
      on: (event: string, callback: (...args: unknown[]) => void) => void;
    };
  }
}

export default function LiveChatWidget() {
  const [hintMessage, setHintMessage] = useState(WELCOME_MESSAGE);
  const [dismissedHint, setDismissedHint] = useState(false);

  const crispWebsiteId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
  const tidioPublicKey = process.env.NEXT_PUBLIC_TIDIO_PUBLIC_KEY;
  const configuredProvider = process.env.NEXT_PUBLIC_CHAT_PROVIDER;

  const provider: ChatProvider | null = useMemo(() => {
    if (configuredProvider === "crisp" && crispWebsiteId) {
      return "crisp";
    }

    if (configuredProvider === "tidio" && tidioPublicKey) {
      return "tidio";
    }

    if (crispWebsiteId) {
      return "crisp";
    }

    if (tidioPublicKey) {
      return "tidio";
    }

    return null;
  }, [configuredProvider, crispWebsiteId, tidioPublicKey]);

  useEffect(() => {
    if (provider !== "crisp" || !crispWebsiteId) {
      return;
    }

    window.$crisp = window.$crisp || [];
    window.CRISP_WEBSITE_ID = crispWebsiteId;

    window.$crisp.push(["do", "message:show", ["text", WELCOME_MESSAGE]]);
    window.CRISP_READY_TRIGGER = () => {
      const crisp = window.$crisp as {
        is?: (method: string) => boolean;
        push?: (args: unknown) => number;
      };
      const isAvailable = crisp?.is?.("website:available");
      if (isAvailable === false) {
        setHintMessage(OFFLINE_MESSAGE);
        crisp?.push?.(["do", "message:show", ["text", OFFLINE_MESSAGE]]);
      } else {
        setHintMessage(WELCOME_MESSAGE);
      }
    };
    window.$crisp.push([
      "on",
      "website:availability:changed",
      (isAvailable: boolean) => {
        const text = isAvailable ? WELCOME_MESSAGE : OFFLINE_MESSAGE;
        setHintMessage(text);
        if (!isAvailable) {
          window.$crisp?.push(["do", "message:show", ["text", OFFLINE_MESSAGE]]);
        }
      },
    ]);

    const existing = document.getElementById("crisp-chat-loader");
    if (existing) {
      return;
    }

    const script = document.createElement("script");
    script.id = "crisp-chat-loader";
    script.src = "https://client.crisp.chat/l.js";
    script.async = true;
    document.head.appendChild(script);
  }, [provider, crispWebsiteId]);

  useEffect(() => {
    if (provider !== "tidio" || !tidioPublicKey) {
      return;
    }

    const existing = document.getElementById("tidio-chat-loader");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "tidio-chat-loader";
      script.src = `https://code.tidio.co/${tidioPublicKey}.js`;
      script.async = true;
      document.body.appendChild(script);
    }

    const onReady = () => {
      setHintMessage(WELCOME_MESSAGE);
      if (!window.tidioChatApi) {
        return;
      }
      window.tidioChatApi.on("setStatus", (payload: unknown) => {
        const status =
          typeof payload === "string"
            ? payload
            : typeof payload === "object" &&
                payload !== null &&
                "status" in payload
              ? String((payload as { status: unknown }).status)
              : "";
        const isOnline = status.toLowerCase().includes("online");
        setHintMessage(isOnline ? WELCOME_MESSAGE : OFFLINE_MESSAGE);
      });
    };

    if (window.tidioChatApi) {
      window.tidioChatApi.on("ready", onReady);
    } else {
      document.addEventListener("tidioChat-ready", onReady, { once: true });
      return () => document.removeEventListener("tidioChat-ready", onReady);
    }
  }, [provider, tidioPublicKey]);

  if (!provider || dismissedHint) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 z-40 max-w-xs rounded-xl border border-slate-200 bg-white p-3 shadow-lg dark:border-slate-700 dark:bg-slate-900 sm:right-5">
      <p className="pr-6 text-xs leading-relaxed text-slate-700 dark:text-slate-300">
        {hintMessage}
      </p>
      <button
        type="button"
        onClick={() => setDismissedHint(true)}
        className="absolute right-2 top-2 rounded px-1 text-xs text-slate-500 transition-colors hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
        aria-label="Dismiss chat message"
      >
        x
      </button>
    </div>
  );
}
