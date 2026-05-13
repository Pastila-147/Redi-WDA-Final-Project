import React from "react";
import { useCallbackStore } from "../../stores/callbackStore";
import "./callbackForm.css";

const CallBackForm = () => {
    const {
        phone,
        savedPhone,
        status,
        setPhone,
        submitPhone,
        clearStatus,
        closeForm,
    } = useCallbackStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        submitPhone();
        setTimeout(() => {
            clearStatus();
        }, 3000);
    };

    return (
        <form className="callback-form" onSubmit={handleSubmit}>
            <input
                type="tel"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
            />

            <button type="submit"> Send </button>

            <button type="button" onClick={closeForm}>x</button>

            {status === "success" && (
                <p> Saved: {savedPhone} </p>
            )}
        </form>
    );
};

export default CallBackForm;