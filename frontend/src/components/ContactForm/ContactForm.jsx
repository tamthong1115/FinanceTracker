

const ContactForm = () => {
  return (
    <div className="contact-form bg-gray-100 p-8 rounded-lg mt-8">
      <h2 className="contact-form__title text-2xl font-bold mb-4">Get in touch with us</h2>
      <form name="get_in_touch" method="post" noValidate>
        <div className="form-group mb-4">
          <div className="form-control">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="get_in_touch_name"
              name="get_in_touch[name]"
              required
              className="form-control__input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              aria-describedby="name"
              placeholder="Your name"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="form-control">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
            <input
              type="email"
              id="get_in_touch_email"
              name="get_in_touch[email]"
              required
              className="form-control__input mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
            />
          </div>
        </div>

        <div className="form-group mb-4">
          <div className="form-control">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="get_in_touch_message"
              name="get_in_touch[message]"
              required
              className="form-control__textarea mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your message"
            ></textarea>
          </div>
        </div>

        <div className="d-flex w-100 justify-content-center">
          <button
            type="submit"
            id="get_in_touch_send"
            name="get_in_touch[send]"
            className="button button--primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;