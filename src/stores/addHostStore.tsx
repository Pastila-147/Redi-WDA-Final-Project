import { create } from "zustand";

const initialHostForm = {
    description: "",
    availability: {
        start: "",
        end: "",
    },
};

export const useAddHostStore = create((set) => ({
    isOpen: false,
    form: initialHostForm,

    openForm: () => set({ isOpen: true }),

    closeForm: () =>
        set({
            isOpen: false,
            form: initialHostForm,
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


    resetForm: () => set({ form: initialHostForm }),
}));


