import { create } from 'zustand'

export const useDogFiltersStore = create((set) => ({
    filters: {
        energyLevel: 'all',
        goodWithKids: false,
        canStayAlone: false,
        specialNeeds: false,
        walksPerDay: 'all',
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
                energyLevel: 'all',
                goodWithKids: false,
                canStayAlone: false,
                specialNeeds: false,
                walksPerDay: 'all',
                startDate: '',
                endDate: '',
            },
        }),
}))