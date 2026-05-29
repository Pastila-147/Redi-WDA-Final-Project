import { create } from "zustand";

export const useCallbackStore = create((set) => ({
    phone: "",
    savedPhone: "",
    status: null,
    isOpen: false,

    setPhone: (phone) => set({ phone }),

    openForm: () => set({ isOpen: true }),

    closeForm: () =>
        set({
            isOpen: false,
            phone: "",
            status: null,
        }),

    submitPhone: () =>
        set((state) => ({
            savedPhone: state.phone,
            phone: "",
            status: "success",
        })),

    clearStatus: () => set({ status: null }),

    clearCallback: () =>
        set({
            phone: "",
            savedPhone: "",
            status: null,
            isOpen: false,
        }),
}));