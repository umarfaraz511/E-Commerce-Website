import React from 'react'

// The NewsletterBox component displays a subscription form section
// allowing users to sign up for newsletters and promotional offers.
// It includes form handling (preventing default submission behavior)
// and is styled responsively with Tailwind CSS.
const NewsletterBox = () => {

  // Handle form submission (preventing page reload for better UX)
  const onSubmitHandler = (event) => {
    event.preventDefault()
    // You can later integrate API call or email service here (e.g., Mailchimp)
  }

  return (
    <div className='text-center'>
      {/* Section Title */}
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>

      {/* Subtext */}
      <p className='mt-3 text-gray-400'>
    Upgrade your wardrobe with the latest from FARAZE.
      </p>

      {/* Newsletter Form */}
      <form
        onSubmit={onSubmitHandler}
        className='flex items-center w-full gap-3 pl-3 mx-auto my-6 border sm:w-1/2'
      >
        {/* Email Input Field */}
        <input
          type='email'
          className='w-full outline-none sm:flex'
          placeholder='Enter your Email'
          required
        />

        {/* Submit Button */}
        <button
          type='submit'
          className='px-10 py-4 text-xs text-white transition-all duration-300 bg-black hover:bg-gray-800'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
