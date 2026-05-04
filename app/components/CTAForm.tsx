"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  websiteUrl: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  websiteUrl: "",
  message: ""
};

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.fullName.trim()) nextErrors.fullName = "Full Name is required.";
    if (!values.email.trim()) {
      nextErrors.email = "Active Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!values.whatsapp.trim()) nextErrors.whatsapp = "WhatsApp Number is required.";
    if (!values.businessName.trim()) nextErrors.businessName = "Business Name is required.";

    if (
      values.websiteUrl.trim() &&
      !/^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/.*)?$/i.test(values.websiteUrl.trim())
    ) {
      nextErrors.websiteUrl = "Please enter a valid website or Facebook URL.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    router.push("/thank-you");
  };

  const handleChange = (field: keyof FormValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const fields: Array<{
    name: keyof FormValues;
    label: string;
    placeholder: string;
    type?: string;
    required?: boolean;
  }> = [
    { name: "fullName", label: "Full Name", placeholder: "Enter your full name", required: true },
    {
      name: "email",
      label: "Active Email",
      placeholder: "Enter your active email",
      type: "email",
      required: true
    },
    {
      name: "whatsapp",
      label: "WhatsApp Number",
      placeholder: "Enter your WhatsApp number",
      required: true
    },
    {
      name: "businessName",
      label: "Business Name",
      placeholder: "Enter your business name",
      required: true
    },
    {
      name: "websiteUrl",
      label: "Website / Facebook URL",
      placeholder: "Add your website or Facebook page"
    }
  ];

  return (
    <section id="cta-form" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-stone-200/80 bg-white/85 p-7 shadow-soft sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-clay">Book the call</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">1:1 Consultation</h2>
          <p className="mt-4 text-lg leading-8 text-stone-700">Customized Strategy for Your Business</p>
          <div className="mt-8 space-y-4 text-stone-600">
            <p>You'll get a clear marketing plan made for your business.</p>
            <p>This short form helps make the consultation more useful for you.</p>
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-soft sm:p-9"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            {fields.map((field) => (
              <div key={field.name} className={field.name === "websiteUrl" ? "sm:col-span-2" : ""}>
                <label htmlFor={field.name} className="mb-2 block text-sm font-semibold text-stone-700">
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type ?? "text"}
                  value={values[field.name]}
                  onChange={(event) => handleChange(field.name, event.target.value)}
                  placeholder={field.placeholder}
                  className="min-h-12 w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 text-base text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-bronze focus:bg-white"
                  aria-invalid={Boolean(errors[field.name])}
                  aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
                />
                {errors[field.name] ? (
                  <p id={`${field.name}-error`} className="mt-2 text-sm text-red-600">
                    {errors[field.name]}
                  </p>
                ) : null}
              </div>
            ))}

            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-stone-700">
                Anything you want to say
              </label>
              <textarea
                id="message"
                rows={5}
                value={values.message}
                onChange={(event) => handleChange("message", event.target.value)}
                placeholder="Tell me a little about your business or your current challenge"
                className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition placeholder:text-stone-400 focus:border-bronze focus:bg-white"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-7 py-3 text-base font-semibold text-white transition hover:bg-stone-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Submitting..." : "Book Free Consultation"}
            </button>
            <p className="mt-3 text-center text-sm text-stone-500">We respect your privacy. No spam.</p>
          </div>
        </form>
      </div>
    </section>
  );
}
