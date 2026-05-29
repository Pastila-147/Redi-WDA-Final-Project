import { create } from "zustand";

const initialDogForm = {
    name: "",
    age: "",
    title: "",
    description: "",
    availability: {
        start: "",
        end: "",
    },
    personality: {
        energyLevel: "",
        goodWithDogs: false,
        goodWithKids: false,
        canStayAlone: false,
    },
    care: {
        walksPerDay: "",
        specialNeeds: false,
    },
};


export const useAddDogStore = create((set) => ({
    isOpen: false,
    form: initialDogForm,

    openForm: () => set({ isOpen: true }),

    closeForm: () =>
        set({
            isOpen: false,
            form: initialDogForm,
        }),

    setField: (field, value) =>
        set((state) => ({
            form: {
                ...state.form,
                [field]: value,
            },
        })),

    setNestedField: (section, field, value) =>
        set((state) => ({
            form: {
                ...state.form,
                [section]: {
                    ...state.form[section],
                    [field]: value,
                },
            },
        })),


    resetForm: () => set({ form: initialDogForm }),
}));


