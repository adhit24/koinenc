"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-sm border border-koin-line bg-koin-bg-alt p-8">
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-koin-ink">
          Email address
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-sm border border-koin-line bg-koin-bg px-4 py-3 text-sm outline-none transition-colors focus:border-koin-orange-deep"
          placeholder="you@company.com"
          aria-invalid={!!error}
          aria-describedby={error ? "email-error" : undefined}
        />
        {error && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-red-600">
            {error}
          </p>
        )}
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-koin-ink">
          Project inquiry
        </label>
        <textarea
          id="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-sm border border-koin-line bg-koin-bg px-4 py-3 text-sm outline-none transition-colors focus:border-koin-orange-deep"
          placeholder="Tell us about your project…"
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-koin-ink px-4 py-3.5 text-sm font-semibold text-koin-bg transition-colors hover:bg-koin-orange-deep"
      >
        {sent ? (
          "Thanks — we'll be in touch."
        ) : (
          <>
            Send Inquiry <Send className="h-4 w-4" />
          </>
        )}
      </motion.button>
    </form>
  );
}
