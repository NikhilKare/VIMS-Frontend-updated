import React from 'react';
import '../TestiMonials/TestiMonials.css'
const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {description, img} = testiMonialDetail;
    console.log("testiMonialDetail"+testiMonialDetail)
    return (
        <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default TestiMonialsDetails;