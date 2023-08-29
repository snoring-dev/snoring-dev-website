"use client";
import * as z from "zod";
import { Button, Input, Spinner, Textarea } from "@material-tailwind/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { forwardRef, useState } from "react";
import { useContactModal } from "@/hooks/use-contact-modal";

const formSchema = z.object({
  name: z.string().nonempty("Name is required").min(3),
  email: z.string().email("Email is required").min(3),
  subject: z
    .string()
    .nonempty("Please prove a subject for your message")
    .min(3),
  message: z
    .string()
    .nonempty("This field is required and should be at least 50 characters")
    .min(50),
});

type ContactFormValues = z.infer<typeof formSchema>;

const defaultValues = { name: "", email: "", subject: "", message: "" };

export const ContactForm = forwardRef<HTMLFormElement>((_props, ref) => {
  const contactModal = useContactModal();
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<z.ZodIssue[]>([]);
  const { register, handleSubmit } = useForm<ContactFormValues>({
    defaultValues,
  });

  const getErrorsForField = (fieldName: string): string[] => {
    const messages: string[] = [];

    formErrors.forEach((err) => {
      if (err.path.includes(fieldName)) {
        messages.push(err.message);
      }
    });

    return messages;
  };

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    try {
      setIsLoading(true);
      formSchema.parse(data);
      const resp = await fetch(`/api/contact`, {
        method: "POST",
        body: JSON.stringify(data),
      });
      if (resp.ok) {
        contactModal.onClose();
      }
    } catch (e) {
      if (e instanceof z.ZodError) {
        setFormErrors(e.errors);
      } else {
        console.log(e);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      ref={ref}
      className="mt-8 mb-2 w-full"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4 flex flex-col gap-6">
        <div>
          <Input size="lg" label="Name" {...register("name")} />
          <div className="flex flex-col text-red-500 pt-2">
            {getErrorsForField("name").map((m, k) => (
              <span className="text-xs pl-1" key={k}>
                - {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Input size="lg" label="Email" {...register("email")} />
          <div className="flex flex-col text-red-500 pt-2">
            {getErrorsForField("email").map((m, k) => (
              <span className="text-xs pl-1" key={k}>
                - {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Input size="lg" label="Subject" {...register("subject")} />
          <div className="flex flex-col text-red-500 pt-2">
            {getErrorsForField("subject").map((m, k) => (
              <span className="text-xs pl-1" key={k}>
                - {m}
              </span>
            ))}
          </div>
        </div>
        <div>
          <Textarea label="Message" {...register("message")} />
          <div className="flex flex-col text-red-500 pt-2">
            {getErrorsForField("message").map((m, k) => (
              <span className="text-xs pl-1" key={k}>
                - {m}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <Button disabled={isLoading} type="submit" variant="gradient" color="green">
          {!isLoading && <span>Confirm</span>}
          {isLoading && <Spinner />}
        </Button>
      </div>
    </form>
  );
});

ContactForm.displayName = "FORM";
