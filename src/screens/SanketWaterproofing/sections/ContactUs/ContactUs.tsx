import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactUs = (): JSX.Element => {
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

  // Form fields data
  const formFields = [
    { id: "name", label: "Your Name", type: "text" },
    { id: "email", label: "Email Address", type: "email" },
    { id: "phone", label: "Phone Number", type: "tel" },
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
              <form className="space-y-6">
                {formFields.map((field) => (
                  <div key={field.id} className="space-y-2">
                    <label
                      htmlFor={field.id}
                      className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                    >
                      {field.label}
                    </label>
                    <Input
                      id={field.id}
                      type={field.type}
                      className="h-[42px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                    />
                  </div>
                ))}

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block font-medium text-sm text-[#1c1c1c] font-['Poppins',Helvetica]"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    className="h-[114px] bg-white border border-solid focus:border-[#f37021] focus:ring-2 focus:ring-[#f37021]/20"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-10 bg-[#f37021] hover:bg-[#e05e10] text-white font-bold text-base font-['Poppins',Helvetica]"
                >
                  Send Message
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
              <div className="mt-8 w-full h-[200px] rounded-lg bg-gray-200 flex items-center justify-center">
                {/* <p className="text-gray-500 font-['Poppins',Helvetica]">Interactive Map Coming Soon</p> */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1625257597525!2d72.8952201754462!3d19.056590552581085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c913e90c8ea3%3A0xf0303e34efa378dc!2sThird%20Wave%20Coffee!5e0!3m2!1sen!2sin!4v1753568580768!5m2!1sen!2sin" 
                  height="200"
                  width="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
