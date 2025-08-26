import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";

export const ContactUs = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    // Email validation (optional, but validate if present)
    if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const now = new Date();
    const date = now.toLocaleDateString("en-GB"); // DD/MM/YYYY
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    const scriptFormData = new FormData();
    scriptFormData.append("Name", formData.name);
    scriptFormData.append("Email", formData.email);
    scriptFormData.append("Phone", formData.phone);
    scriptFormData.append("city", formData.city);
    scriptFormData.append("message", formData.message);
    scriptFormData.append("Date", date);
    scriptFormData.append("Time", time);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbyDD4voqdAPYow73hHrhY1xdiNADUjv8c13esCe7IByiyYp5_L3V6A8WXTonn5uCfiU/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          city: formData.city,
          date: date,
          time: time,
        }),
      });

      if (response.ok) {
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          city: "",
          message: "",
        });
        setErrors({});
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "There was an error sending your message. Please try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information data
  const contactInfo = [
    {
      icon: <MailIcon className="h-4 w-4 text-white" />,
      title: "Email",
      value: "contact@kewaterproofing.com",
      href: "mailto:contact@kewaterproofing.com",
    },
    {
      icon: <PhoneIcon className="h-4 w-4 text-white" />,
      title: "Phone",
      value: "+91 87794 96622",
      href: "tel:+918779496622",
    },
    {
      icon: <MapPinIcon className="h-4 w-4 text-white" />,
      title: "Address",
      value: "606, Bldg No 6, Satara CHS, Opposite ATI, Sion Chunabhatti, Mumbai - 400022",
      href: null,
    },
  ];

  return (
    <section id="contact-us" className="w-full py-16 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="font-bold text-3xl text-[#1c1c1c] font-['Poppins',Helvetica] mb-4">
            Get in Touch
          </h2>
          <p className="font-normal text-base text-[#4b4b4b] font-['Poppins',Helvetica] max-w-[704px] mx-auto">
            Whether you have questions about waterproofing or are ready to get the job done, we’re here to help—contact us today for a consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] bg-neutral-100">
            <CardContent className="p-6">
              <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-[42px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Email Address (Optional)
                  </label>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="h-[42px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="h-[42px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="city"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    City
                  </label>
                  <Input
                    id="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    className="h-[42px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                  {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="h-[114px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-10 bg-[#f37021] hover:bg-[#e05e10] text-white font-bold text-base font-['Poppins',Helvetica] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-[0px_4px_6px_#0000001a,0px_2px_4px_#0000001a] bg-neutral-100">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-[#1c1c1c] font-['Poppins',Helvetica] mb-8">
                Contact Information
              </h3>

              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-10 h-10 bg-[#f37021] rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-base text-[#1c1c1c] font-['Poppins',Helvetica]">
                        {item.title}
                      </h4>
                      <div className="font-normal text-base text-[#4b4b4b] font-['Poppins',Helvetica]">
                        {item.href ? (
                          <a href={item.href} className="hover:text-[#f37021] transition-colors duration-300 hover:underline">
                            {item.value}
                          </a>
                        ) : (
                          <span>{item.value}</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 w-full h-[260px] rounded-lg bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d792.8060587178471!2d72.87906536383095!3d19.053082965939847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8b9987bd6af%3A0xf54753cc38673103!2sSatara%20CHSL!5e0!3m2!1sen!2sin!4v1756162012789!5m2!1sen!2sin"
                  height="260"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
