"use client";

import { useContactModal } from "@/hooks/use-contact-modal";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { ContactForm } from "./contact-form";
import { useRef } from "react";

function ContactModal() {
  const contactModal = useContactModal();
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <Dialog open={contactModal.isOpen} handler={contactModal.onClose}>
      <DialogHeader>
        <div className="flex flex-col">
          <span className="font-bold text-black">Contact me</span>
          <span className="text-sm font-light text-gray-500">{`Your message will be forwarded to my email directly and won't be saved anywhere`}</span>
        </div>
      </DialogHeader>
      <DialogBody divider>
        <ContactForm ref={formRef} />
      </DialogBody>
    </Dialog>
  );
}

export default ContactModal;
