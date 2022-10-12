import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="relative bg-deep-purple-accent-400 ">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Get updates on the
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900"> Latest Topics</span>
              </span>
              <br className="hidden md:block" />
              and sharen your skill
            </h2>

            <a
              href="#quiz"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div class="space-y-4 w-full px-2 md:w-2/4 m-auto my-10">
        <details class="group" open>
          <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
            <h5 class="font-medium text-gray-900">
              What is the purpose of react router?
            </h5>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            React Router is a standard library for routing in React. It enables the
            navigation among views of various components in a React Application, allows
            changing the browser URL, and keeps the UI in sync with the URL. ReactJS
            Router is mainly used for developing Single Page Web Applications. React
            Router is used to define multiple routes in the application. When a user types
            a specific URL into the browser, and if this URL path matches any 'route'
            inside the router file, the user will be redirected to that particular route.
          </p>
        </details>

        <details class="group">
          <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
            <h5 class="font-medium text-gray-900">How does context Api Work?</h5>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            The React Context API is a way for a React app to effectively produce global
            variables that can be passed around. This is the alternative to "prop
            drilling" or moving props from grandparent to child to parent, and so on.
            Context is also touted as an easier, lighter approach to state management
            using Redux.Context is a built-in API introduced in ​​React 16.3. It makes it
            possible to pass data from parent to children nested deep down the component
            tree directly, instead of passing it down through a chain of props
          </p>
        </details>

        <details class="group">
          <summary class="flex cursor-pointer items-center justify-between rounded-lg bg-gray-50 p-4">
            <h5 class="font-medium text-gray-900"> Describe useref in your own words.</h5>

            <svg
              class="ml-1.5 h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p class="mt-4 px-4 leading-relaxed text-gray-700">
            The useRef is a hook that allows to directly create a reference to the DOM
            element in the functional component.
            <br />
            <small className="font-bold">
              Syntax: const refContainer = useRef(initialValue);
            </small>
            The useRef returns a mutable ref object. This object has a property called
            .current. The value is persisted in the refContainer.current property. These
            values are accessed from the current property of the returned object. The
            .current property could be initialised to the passed argument initialValue
            e.g. useRef(initialValue). The object can persist a value for a full lifetime
            of the component. . useRef can be used to store data values just like
            useState, but the difference is that when that value changes, it doesn't cause
            a re-render.
          </p>
        </details>
      </div>
    </div>
  );
};

export default Blog;
