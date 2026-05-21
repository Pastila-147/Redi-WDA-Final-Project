import Hosts from '../components/HostsCards/HostsCards'
import HostSearchForm from '../components/Forms/HostSearchForm';
import AddHostForm from '../components/Forms/AddHostForm';
import { useAddHostStore } from '../stores/addHostStore';

export default function About() {
    const openForm = useAddHostStore((state) => state.openForm);
    const isOpen = useAddHostStore((state) => state.isOpen);

    return (
        <div>
            <h1> Our hosts in Munich </h1>
            <h3>Browse hosts in Munich and ask temporary care</h3>

            <button type="button" onClick={openForm}>
                Become a host
            </button>

            {isOpen && <AddHostForm />}

            <HostSearchForm />

            <Hosts />
        </div>
    )

}