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

function ContactModal() {
  const contactModal = useContactModal();

  return (
    <Dialog open={contactModal.isOpen} handler={contactModal.onClose}>
      <DialogHeader>
        <div className="flex flex-col">
          <span className="font-bold text-black">Contact me</span>
          <span className="text-sm font-light text-gray-500">{`Your message will be forwarded to my email directly and won't be saved anywhere`}</span>
        </div>
      </DialogHeader>
      <DialogBody divider>
        <ContactForm />
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="red"
          onClick={contactModal.onClose}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="green" onClick={contactModal.onClose}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default ContactModal;
