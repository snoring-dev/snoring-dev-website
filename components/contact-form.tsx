"use client";

import { Input, Textarea } from "@material-tailwind/react";

export function ContactForm() {
  return (
    <form className="mt-8 mb-2 w-full">
      <div className="mb-4 flex flex-col gap-6">
        <Input size="lg" label="Name" required />
        <Input size="lg" label="Email" required />
        <Input size="lg" label="Subject" required />
        <Textarea label="Message" required />
      </div>
    </form>
  );
}
