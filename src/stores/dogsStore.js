import { create } from "zustand";
import { dogsData } from "../components/DogsCards/dogsData";

export const useDogsStore = create((set) => ({
    dogs: JSON.parse(localStorage.getItem("dogs")) || dogsData,

    setDogs: (dogs) =>
        set(() => {
            localStorage.setItem("dogs", JSON.stringify(dogs));

            return { dogs };
        }),

    addDog: (dog) =>
        set((state) => {
            const updatedDogs = [...state.dogs, dog];

            localStorage.setItem("dogs", JSON.stringify(updatedDogs));

            return { dogs: updatedDogs };
        }),

    chooseDog: (dogId) =>
        set((state) => {
            const updatedDogs = state.dogs.map((dog) =>
                dog.id === dogId
                    ? { ...dog, isChosen: true }
                    : dog
            );

            localStorage.setItem("dogs", JSON.stringify(updatedDogs));

            return { dogs: updatedDogs };
        }),
}));