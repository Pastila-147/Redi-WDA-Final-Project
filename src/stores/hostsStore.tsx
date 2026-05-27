import { create } from "zustand";
import { hostsData } from "../components/HostsCards/hostData";

export const useHostsStore = create((set) => ({
    hosts: JSON.parse(localStorage.getItem("hosts")) || hostsData,

    addHost: (host) =>
        set((state) => {
            const updatedHosts = [...state.hosts, host];

            localStorage.setItem("hosts", JSON.stringify(updatedHosts));

            return { hosts: updatedHosts };
        }),
}));