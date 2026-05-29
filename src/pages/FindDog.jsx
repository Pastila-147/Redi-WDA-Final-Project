import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Dogs from '../components/DogsCards/DogsCards';
import DogSearchForm from '../components/Forms/DogSearchForm';
import AddDogForm from '../components/Forms/AddDogForm';
import { useAddDogStore } from '../stores/addDogStore';
import './FindDog.css';


export default function FindDog() {
    const location = useLocation();
    const {isOpen, openForm} = useAddDogStore();

    useEffect(() => {
        if (location.hash === '#add-dog-form') {
            openForm();

            setTimeout(() => {
                document
                    .getElementById('add-dog-form')
                    ?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }, [location, openForm]);

    return (
        <section className="dogs-page" id="find-dog">
            <div className="dogs-page__hero">
                <h1 className="dogs-page__title">
                    Dogs looking for a host
                </h1>

                <p className="dogs-page__subtitle">
                    Browse dogs in Munich and offer temporary care
                </p>

                <button
                    type="button"
                    className="dogs-page__add-button"
                    onClick={openForm}
                >
                    + Add your dog
                </button>
            </div>

            <div id="add-dog-form">
                {isOpen && (
                    <div className="add-dog-form-wrapper">
                        <AddDogForm />
                    </div>
                )}
            </div>

            <DogSearchForm />

            <Dogs />
        </section>
    )
}