import React, { useState } from "react";
import Card from "./Card";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("");

    const formData = new FormData(event.target);
    formData.append("access_key", "9cea6d4a-0775-44df-9816-763db8e6376b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Form submitted successfully.");
        event.target.reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-us" className="min-h-screen flex flex-col items-center justify-center -my-20">
      <Card
        title="Reach out to us"
        description="From strategy to execution, we craft digital solutions that move your business forward."
      />
      <div className="max-w-2xl w-full p-6">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="border p-2 rounded border-gray-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="border p-2 rounded border-gray-300"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            className="border p-2 rounded border-gray-300"
            required
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className={`p-2 rounded text-white ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"
            }`}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>

        <Toaster position="bottom-right" />
        {result && (
          <span className="block mt-3 text-sm text-gray-600">{result}</span>
        )}
      </div>
    </div>
  );
}
