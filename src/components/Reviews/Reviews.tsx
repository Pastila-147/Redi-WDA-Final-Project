import Review from "./Review";
import "./Reviews.css";
import photo1 from '../../assets/reviews/photo3.png';
import photo2 from '../../assets/reviews/photo1.png';
import photo3 from '../../assets/reviews/photo2.png';

const reviews = [
    {
        id: 1,
        name: "Joy & Anastasia",
        text: "Everything went perfectly. I got regular updates and photos, which made me feel so calm.",
        image: photo2
    },
    {
        id: 2,
        name: "Kubuk & Sergey",
        text: "Super friendly host and great communication. Kubik had so much fun and came back happy and relaxed.",
        image: photo3
    },
    {
        id: 3,
        name: "Stefan & Natalia",
        text: "Highly recommend! Rocky was well taken care of and even didn’t want to leave at the end.",
        image: photo1
    }
];

const Reviews = () => {
    return (
        <section className="section-feedback" id="reviews">
            <div className="feedback-container">
                <h2 className="feedback-title">Reviews</h2>
                <div className="feedback-content">
                    {reviews.map((review) => (
                        <Review
                            key={review.id}
                            image={review.image}
                            name={review.name}
                            text={review.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
