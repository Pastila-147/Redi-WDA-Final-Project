import { create } from 'zustand'

export const useHostFiltersStore = create((set) => ({
    filters: {
        startDate: '',
        endDate: '',
    },

    setFilter: (name, value) =>
        set((state) => ({
            filters: {
                ...state.filters,
                [name]: value,
            },
        })),

    resetFilters: () =>
        set({
            filters: {
                startDate: '',
                endDate: '',
            },
        }),
}))