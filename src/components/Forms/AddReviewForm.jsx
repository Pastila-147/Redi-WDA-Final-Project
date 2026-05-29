import { useState } from 'react';
import './AddReviewForm.css';

function AddReviewForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    return (
        <div className="add-review">
            <h2 className="add-review__title">Leave a review</h2>

            {isSubmitted ? (
                <p className="add-review__success">Thank you! Your review has been submitted for approval.</p>
            ) : (
                <form className="add-review__form" onSubmit={handleSubmit}>
                    <input
                        className="add-review__input"
                        type="text"
                        placeholder="Your name"
                        required
                    />

                    <select
                        className="add-review__select"
                        required
                    >
                        <option value="">Rating</option>
                        <option value="5">★★★★★</option>
                        <option value="4">★★★★☆</option>
                        <option value="3">★★★☆☆</option>
                        <option value="2">★★☆☆☆</option>
                        <option value="1">★☆☆☆☆</option>
                    </select>

                    <textarea
                        className="add-review__textarea"
                        placeholder="Write your review..."
                        required
                    />

                    <button className="add-review__button" type="submit">Submit review</button>
                </form>
            )}
        </div>
    );
}

export default AddReviewForm;