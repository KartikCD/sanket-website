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
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: scriptFormData,
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
      value: "info@aquashield.com",
    },
    {
      icon: <PhoneIcon className="h-4 w-4 text-white" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
    },
    {
      icon: <MapPinIcon className="h-4 w-4 text-white" />,
      title: "Address",
      value: "123 Waterproof Avenue, Suite 400 Boston, MA 02110",
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
            Have questions about our waterproofing solutions? Contact us today
            for a consultation.
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
                      <p className="font-normal text-base text-[#4b4b4b] font-['Poppins',Helvetica]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-8 w-full h-[260px] rounded-lg bg-gray-200 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1625257597525!2d72.8952201754462!3d19.056590552581085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c913e90c8ea3%3A0xf0303e34efa378dc!2sThird%20Wave%20Coffee!5e0!3m2!1sen!2sin!4v1753568580768!5m2!1sen!2sin"
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
