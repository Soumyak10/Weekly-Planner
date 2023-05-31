import { useState } from "react";
import "./App.css";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

function App() {
    return (
        <>
            <button
                type="button"
                className="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                <PlusCircleIcon
                    className="-ml-0.5 mr-2 h-6 w-6"
                    aria-hidden="true"
                />
                Button text
            </button>
        </>
    );
}

export default App;
