import { useQuery } from '@tanstack/react-query'
import { getHosts } from '../../api/hostApi'
import './HostsCards.css';


//react-component
function Hosts() {
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

    return (
        <div className="host-list">
            {query.data?.map((host) => {

                return (
                    <div key={host.id} className="host-card">
                        <img src={host.avatar} alt={host.name} />
                        <p>{host.name}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Hosts
