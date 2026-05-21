import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { getHosts } from '../../api/hostApi';
import { useHostsStore } from '../../stores/hostsStore';
import { useHostFiltersStore } from '../../stores/useHostFiltersStore';
import './HostsCards.css';

//react-component
function Hosts() {
    const [selectedHost, setSelectedHost] = useState(null);

    const hostsFromStore = useHostsStore((state) => state.hosts);
    const filters = useHostFiltersStore((state) => state.filters);
    const query = useQuery({
        queryKey: ['hosts'],
        queryFn: getHosts,
    })

    if (query.isLoading) {
        return <p>Loading hosts...</p>
    }
    if (query.isError) {
        return <p>Error: {query.error.message}</p>
    }

    //collecting data in one object
    const hosts = query.data
        ?.map((apiHost, index) => {
            const hostInfo = hostsFromStore[index];

            if (!hostInfo) return null;

            return {
                ...hostInfo,
                name: apiHost.name,
                city: apiHost.city,
                avatar: apiHost.avatar,
            };
        })
        .filter(Boolean);


    const filteredHosts = hosts.filter((host) => {
        if (filters.startDate && host.availability.start > filters.startDate) {
            return false;
        }

        if (filters.endDate && host.availability.end < filters.endDate) {
            return false;
        }

        return true;
    });


    return (
        <div className="host-list">
            {filteredHosts.map((host) => (
                <div key={host.id} className="host-card">
                    <img
                        className="host-card__avatar"
                        src={host.avatar}
                        alt={host.name}
                    />

                    <h3 className="host-card__name">{host.name}</h3>
                    <p className="host-card__city">{host.city}</p>
                    <p className="host-card__experience">{host.experience} {host.experience === 1 ? 'year' : 'years'} of experience</p>
                    <p className="host-card__description">{host.description} </p>
                    <p className="host-card__dates"> Available from {host.availability.start} to {host.availability.end}</p>

                    <button
                        className="host-card__button"
                        type="button"
                        onClick={() => setSelectedHost(host)}
                    >
                        Contact the host
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Hosts;