import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 my-12">
        <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-5xl lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                id="tier-hobby"
              >
                Hobby
              </h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                $0
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                All basic features included.
              </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Run 1 Interview Simulation (1 Interview Credit)
                    </p>
                  </li>

                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Credits never expire
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Every new user gets 3 Interivew Credit
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-red-600"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      plz just get the premium version is just 1$
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/login"
                    className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                    aria-describedby="tier-team"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl bg-white shadow-xl ring-1 ring-black/10">
            <div className="p-8 sm:p-10">
              <h3
                className="text-lg font-semibold leading-8 tracking-tight text-blue-600"
                id="tier-team"
              >
                Pro
              </h3>
              <div className="mt-4 flex items-baseline text-5xl font-bold tracking-tight text-gray-900">
                $1
                <span className="text-lg font-semibold leading-8 tracking-normal text-gray-500">
                  /mo
                </span>
              </div>
              <p className="mt-6 text-base leading-7 text-gray-600">
                For those who expect more.
              </p>
            </div>
            <div className="flex flex-1 flex-col p-2">
              <div className="flex flex-1 flex-col justify-between rounded-2xl bg-gray-50 p-6 sm:p-8">
                <ul role="list" className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Run 15 Interview Simulation
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Manage and Filter Tags
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Can answer as many questions as you want to answer.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-6 w-6 text-blue-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                    </div>
                    <p className="ml-3 text-sm leading-6 text-gray-600">
                      Can run all of the interview stages
                    </p>
                  </li>
                </ul>
                <div className="mt-8">
                  <a
                    href="/billing"
                    className="inline-block w-full rounded-lg bg-gray-900 px-4 py-4 text-center text-sm font-semibold leading-5 text-white shadow-md hover:bg-white hover:text-gray-900 hover:ring-gray-900 hover:ring"
                    aria-describedby="tier-team"
                  >
                    Get started today
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
