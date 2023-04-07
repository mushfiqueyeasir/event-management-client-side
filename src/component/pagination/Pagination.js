import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layer/AppLayer";

const Pagination = ({ events }) => {
  const { page, handlePage } = useContext(GLOBAL_CONTEXT);
  let pageArray = Array.from({ length: events.pageLength }, (_, i) => i + 1);
  return (
    <div className="flex items-center justify-end border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="hidden md:flex">
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {events.currentPageDataLength > 10
                ? 10
                : events.currentPageDataLength}
            </span>{" "}
            of
            <span className="font-medium"> {events.dataLength} </span>
            results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              disabled={page === 1}
              onClick={() => handlePage({ prev: true })}
              className={`${
                page === 1 && "cursor-not-allowed"
              } relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {pageArray.map((item) => (
              <button
                id={item}
                key={item}
                onClick={(event) => handlePage({ event: event })}
                className={`${
                  page === item && " bg-[#57A3E1] text-white"
                } relative border z-10 inline-flex items-center  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
              >
                {item}
              </button>
            ))}

            <button
              disabled={page === events.pageLength}
              onClick={() => handlePage({ next: true })}
              className={`${
                page === events.pageLength && "cursor-not-allowed"
              } relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
