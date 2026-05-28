import React from "react";
import { useAddHostStore } from "../../stores/addHostStore";
import "./AddHostForm.css";
import { useHostsStore } from "../../stores/hostsStore";

function AddHostForm() {
    const {
        form,
        setField,
        setNestedField,
        closeForm,
        resetForm,
    } = useAddHostStore();

    const addHost = useHostsStore((state) => state.addHost);

    const handleSubmit = (e) => {
        e.preventDefault();


        const newHost = {
            id: Date.now(),
            ...form,
            experience: Number(form.experience),
        };

        addHost(newHost);

        resetForm();
        closeForm();
    };

    return (
        <form className="new-host-form" onSubmit={handleSubmit}>

            <button className="new-host-form__close" type="button" onClick={closeForm}>×
            </button>

            <input
                name="name"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setField("name", e.target.value)}
                required
            />
            <input
                name="age"
                type="number"
                placeholder="Age"
                value={form.age}
                onChange={(e) => setField("age", e.target.value)}
                required
            />
            <input
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={(e) => setField("description",e.target.value)}
                required
            />

            <input
                name="start"
                type="date"
                value={form.availability.start}
                onChange={(e) => setNestedField("availability", "start", e.target.value)}
                required
            />
            <input
                name="end"
                type="date"
                value={form.availability.end}
                onChange={(e) => setNestedField("availability","end",e.target.value)}
                required
            />

            <input
                name="experience"
                type="number"
                placeholder="Years of experience"
                value={form.experience}
                onChange={(e) => setField("experience", e.target.value)}
                required
            />

            <button type="submit"> Send </button>
        </form>
    );
}
export default AddHostForm;