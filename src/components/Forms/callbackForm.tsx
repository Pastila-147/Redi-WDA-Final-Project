import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./callbackForm.css";
import { useCallbackStore } from "../../stores/callbackStore";

const CallBackForm = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const closeForm = useCallbackStore((state) => state.closeForm);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
    });

    const onSubmit = (data) => {
        console.log(data);
        setIsSuccess(true);
        reset();
        setTimeout(() => {
            setIsSuccess(false);
        }, 3000);
    };

    return (
        <form className="callback-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="callback-form__header">
                <div>
                    <h2 className="callback-form__title">Request a call back</h2>
                    <p className="callback-form__subtitle">
                        Leave your number and we’ll get <br />
                        in touch within 24 hours
                    </p>
                </div>

                <button className="callback-form__close" type="button" onClick={closeForm}>×</button>
            </div>

            <div className="callback-form__content">

                <label className="callback-form__label">
                    Your name
                    <input
                        className={`callback-form__input ${
                            errors.name
                                ? "callback-form__input_error"
                                : ""
                        }`}
                        type="text"
                        placeholder="Name"
                        {...register("name", {
                            required: "Enter your name",
                        })}
                    />
                </label>

                {errors.name && (
                    <p className="callback-form__error">{errors.name.message}</p>)}

                <label className="callback-form__label">
                    Phone number

                    <input
                        className={`callback-form__input ${
                            errors.phone
                                ? "callback-form__input_error"
                                : ""
                        }`}
                        type="tel"
                        placeholder="+49 151 00000000"
                        {...register("phone", {
                            required: "Enter your phone number",
                            pattern: {
                                value: /^\+?[0-9\s()-]{10,20}$/,
                                message: "Enter a valid phone number",
                            },
                        })}
                    />
                </label>

                {errors.phone && (<p className="callback-form__error">{errors.phone.message}</p>)}

                <button className="callback-form__submit" type="submit">Send</button>
                <p className="callback-form__privacy">We won’t share your data with anyone</p>
                {isSuccess && (<p className="callback-form__success">Request sent successfully</p>)}
            </div>
        </form>
    );
};

export default CallBackForm;