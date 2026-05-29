import Hosts from '../components/HostsCards/HostsCards'
import HostSearchForm from '../components/Forms/HostSearchForm';
import AddHostForm from '../components/Forms/AddHostForm';
import { useAddHostStore } from '../stores/addHostStore';
import './FindSitter.css';
import {useEffect} from "react";
import { useLocation } from 'react-router-dom';


export default function FindSitter() {
    const location = useLocation();
    const openForm = useAddHostStore((state) => state.openForm);
    const isOpen = useAddHostStore((state) => state.isOpen);

    useEffect(() => {
        if (location.hash === '#add-host-form') {
            openForm();

            setTimeout(() => {
                document
                    .getElementById('add-host-form')
                    ?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location, openForm]);

    return (
        <section className="hosts-page" id="find-host">

            <div className="hosts-page__hero">
                <h1 className="hosts-page__title">Our hosts in Munich</h1>
                <p className="hosts-page__subtitle">Browse hosts in Munich and ask temporary care</p>
                <button
                    type="button" className="hosts-page__add-button" onClick={openForm}>+ Become a host
                </button>
            </div>


            <div id="add-host-form">
                {isOpen && (
                    <div className="add-host-form-wrapper">
                        <AddHostForm />
                    </div>
                )}
            </div>

            <HostSearchForm />

            <Hosts />
        </section>
    )

}