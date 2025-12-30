import { useState, type FormEvent } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Formspree endpoint - replace with your form ID when ready
    // For now, use mailto fallback
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

    try {
      // Attempt Formspree submission
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        // Fallback to mailto
        handleMailtoFallback(formData);
      }
    } catch {
      // Fallback to mailto
      handleMailtoFallback(formData);
    }
  };

  const handleMailtoFallback = (formData: FormData) => {
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const interest = formData.get('interest');
    const message = formData.get('message');

    const subject = encodeURIComponent(
      `Contact Form: ${interest || 'General Inquiry'}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\nInterest: ${interest}\n\nMessage:\n${message}`
    );

    // Open mailto link
    window.location.href = `mailto:contact@axispoint.com?subject=${subject}&body=${body}`;

    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="p-8 bg-green-50 rounded-lg text-center">
        <svg
          className="w-16 h-16 text-green-600 mx-auto mb-4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-medium text-green-800 mb-2">
          Message sent
        </h3>
        <p className="text-green-700">
          We'll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div className="space-y-2">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-900"
        >
          Name <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-900"
        >
          Email <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-900"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Interest */}
      <div className="space-y-2">
        <label
          htmlFor="interest"
          className="block text-sm font-medium text-gray-900"
        >
          Interest
        </label>
        <select
          id="interest"
          name="interest"
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
        >
          <option value="">Select an option</option>
          <option value="Investment Advisory">Investment Advisory</option>
          <option value="Asset Management">Asset Management</option>
          <option value="Both">Both</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-900"
        >
          Message <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Error Message */}
      {status === 'error' && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or email us directly at
          contact@axispoint.com
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
