import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

const FormControl = () => {
    const [value, setValue] = useState({
        startDate: new Date(),
        endDate: new Date().setMonth(11),
    });

    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setValue(newValue);
    };
    return (
        <form className="m-6">
            <div className="my-4">
                <h3 className="font-semibold">Add Period</h3>
                {/* need to add cross button */}
            </div>
            <div>
                <label
                    htmlFor="price"
                    className="block text-sm font-medium leading-6 text-gray-900"
                >
                    Period Name
                </label>
                <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                        type="text"
                        name="price"
                        id="price"
                        className="block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter Period Name"
                    />
                </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label
                        htmlFor="start-time"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Start Time
                    </label>
                    <div className="mt-2">
                        <input
                            type="time"
                            name="start-time"
                            id="start-time"
                            autoComplete="start-time"
                            className="flex flex-row-reverse w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                        htmlFor="end-time"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        End Time
                    </label>
                    <div className="mt-2">
                        <input
                            type="time"
                            name="end-time"
                            id="end-time"
                            autoComplete="end-time"
                            className="flex flex-row-reverse w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
            </div>

            <div class="weekDays-selector my-4">
                <h3 className="font-medium my-2">Repeat on Days</h3>

                <input type="checkbox" id="weekday-sun" class="weekday" />
                <label for="weekday-sun">S</label>
                <input type="checkbox" id="weekday-mon" class="weekday" />
                <label for="weekday-mon">M</label>
                <input type="checkbox" id="weekday-tue" class="weekday" />
                <label for="weekday-tue">T</label>
                <input type="checkbox" id="weekday-wed" class="weekday" />
                <label for="weekday-wed">W</label>
                <input type="checkbox" id="weekday-thu" class="weekday" />
                <label for="weekday-thu">T</label>
                <input type="checkbox" id="weekday-fri" class="weekday" />
                <label for="weekday-fri">F</label>
                <input type="checkbox" id="weekday-sat" class="weekday" />
                <label for="weekday-sat">S</label>
            </div>

            <div>
                <Datepicker
                    value={value}
                    onChange={handleValueChange}
                    displayFormat={"DD/MM/YYYY"}
                />
            </div>
        </form>
    );
};
export default FormControl;
