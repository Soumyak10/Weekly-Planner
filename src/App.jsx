import { useState } from "react";
import "./App.css";

import Modal from "./components/Modal";
import Button from "./components/Button";
import Navbar from "./components/Navbar";

function App() {
    const [open, setOpen] = useState(false);

    return (
        <div className="w-full">
            {/* <div className="border-b-2"></div> */}
            <Navbar />
            <div className="m-4">
                <Modal open={open} setOpen={setOpen} />
                <Button action={() => setOpen(true)} />
            </div>
        </div>
    );
}

export default App;
