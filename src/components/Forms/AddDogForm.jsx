import React from "react";
import { useAddDogStore } from "../../stores/addDogStore";
import "./AddDogForm.css";
import { useDogsStore } from "../../stores/dogsStore";

function AddDogForm() {
    const {
        form,
        setField,
        setNestedField,
        closeForm,
        resetForm,
    } = useAddDogStore();

    const addDog = useDogsStore((state) => state.addDog);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDog = {
            id: Date.now(),
            ...form,
            age: Number(form.age),
            care: {
                ...form.care,
                walksPerDay: Number(form.care.walksPerDay),
            },
        };

        addDog(newDog);
        resetForm();
        closeForm();
    };

    return (
        <form className="new-dog-form" onSubmit={handleSubmit}>

            <button className="new-dog-form__close" type="button" onClick={closeForm}>×</button>

            <input
                name="name"
                placeholder="Enter your dog name"
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
                name="title"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setField("title",e.target.value)}
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
            <select
                name="energyLevel"
                value={form.personality.energyLevel}
                onChange={(e) =>
                    setNestedField("personality", "energyLevel", e.target.value)}
                required
            >
                <option value="">Energy level</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <input
                name="walksPerDay"
                type="number"
                placeholder="Walks per day"
                value={form.care.walksPerDay}
                onChange={(e) => setNestedField("care", "walksPerDay", e.target.value)}
                required
            />
            <label>
                <input
                    type="checkbox"
                    checked={form.personality.goodWithDogs}
                    onChange={(e) =>
                        setNestedField("personality", "goodWithDogs", e.target.checked)}
                />
                Good with dogs
            </label>
            <label>
                <input
                    type="checkbox"
                    checked={form.personality.goodWithKids}
                    onChange={(e) =>
                        setNestedField("personality", "goodWithKids", e.target.checked)}
                />
                Good with kids
            </label>

            <label>
                <input
                    type="checkbox"
                    checked={form.personality.canStayAlone}
                    onChange={(e) =>
                        setNestedField("personality", "canStayAlone", e.target.checked)}
                />
                Can stay alone
            </label>
            <label>
            <input
                type="checkbox"
                checked={form.care.specialNeeds}
                onChange={(e) =>
                    setNestedField("care", "specialNeeds", e.target.checked)
                }
            /> Special needs
            </label>

            <button type="submit"> Send </button>
        </form>
    );
}
export default AddDogForm;