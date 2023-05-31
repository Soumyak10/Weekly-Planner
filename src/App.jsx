import { useState } from "react";
import "./App.css";

import Modal from "./components/Modal";
import Button from "./components/Button";

function App() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <Modal open={open} setOpen={setOpen} />
            <Button action={() => setOpen(true)} />
        </>
    );
}

export default App;
