import React, { useState } from 'react';
import './Pricing.css'; // Import the CSS file for styling
import { Button } from 'react-bootstrap';
import { Collapse } from 'react-bootstrap';



export function AccessibleToggleSwitch() {
    const [isChecked, setIsChecked] = useState(false);

    const handleToggle = () => {
        setIsChecked(!isChecked);
    };

    const handleKeyDown = (event) => {
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            handleToggle();
        }
    };

    return (
        <div
            role="checkbox"
            aria-checked={isChecked}
            tabIndex="0"
            className={`toggle-switch ${isChecked ? 'checked' : ''}`}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
        >
            <div className="toggle-switch-inner"></div>
        </div>
    );
}


// pricing Card

export function PricingCard({ heading, paragraph, price, features, featureBgColor }) {
    const featureStyle = {
        backgroundColor: featureBgColor || '#f8f9fa',
    };

    return (
        <div className="card p-3 price-cards h-100" style={{ maxWidth: "22rem" }}>
            <div className="card-body">
                <h2 className="card-title m-0 border-0 px-0">{heading}</h2>
                <p className="card-text">{paragraph}</p>
                <span className="text-muted p-2 rounded-pill" style={featureStyle}>From</span>
                <h2 className="card-price py-2">{price}  <span className='h6 text-secondary'>per month</span></h2>
                <Button className='w-100 rounded-pill btn-dark'>Book a Demo</Button>
                <br></br>
                <br></br>
                <ul className="list-group list-group-flush text-font font-2" style={featureStyle}>
                    {features.map((feature, index) => (
                        <li key={index} className="border-0 list-group-item d-flex align-items-center" style={{ ...featureStyle, margin: '0', padding: '5px', fontSize: "12px" }}>
                            <span className="me-2" style={{ backgroundColor: 'black', color: 'white', borderRadius: '50%' }}>&#10004;</span>{feature}
                        </li>
                        // <li key={index} className="list-group-item bg-transparent">{feature}</li>
                    ))}
                </ul>
                <div className='w-100 text-center'>
                    <Button variant="outline-secondary" className="mt-3">View all Features</Button>
                </div>
            </div>
        </div>
    );
};

// FAQ Section 
export function Faq({ title, description }) {
    const [isOpen, setIsOpen] = useState(Array(1).fill(false)); // Initialize state for 50 items

    const handleToggle = (index) => { // Toggle function takes index of the item
        const updatedState = [...isOpen]; // Copy the current state array
        updatedState[index] = !updatedState[index]; // Toggle the state of the clicked item
        setIsOpen(updatedState); // Update the state
    };

    return (
        <div className="accordion accordion-flush border-color" id="accordionFlushExample">
            {Array.from({ length: 1 }, (_, index) => ( // Generate 50 accordion items dynamically
                <div key={index} className="accordion-item text-font ">
                    <h2 className="accordion-header" id={`flush-heading${index + 1}`}>
                        <button
                            style={{ color: "#1D1C1C" }}
                            className="accordion-button collapsed d-flex justify-content-between"
                            type="button"
                            onClick={() => handleToggle(index)} // Pass index of the item
                            aria-expanded={isOpen[index]}
                            aria-controls={`flush-collapse${index + 1}`}
                        >
                            {title} {' '}
                            {isOpen[index] ?
                                (
                                    <i class="fa-solid fa-angle-down"></i>

                                )
                                :
                                (
                                    <i class="fa-solid fa-angle-right"></i>

                                )
                            }
                        </button>
                    </h2>
                    <Collapse in={isOpen[index]}>
                        <div id={`flush-collapse${index + 1}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${index + 1}`}>
                            <div className="accordion-body">
                                {description}
                            </div>
                        </div>
                    </Collapse>
                </div>
            ))}
        </div>
    );
};


// Card for add ons Module Standards
export function MyCard({ heading, buttontext, subheading, content, learnMoreLink }) {
    return (
        <div className="card p-3 rounded-4 addon-card" style={{ maxWidth: "370px" }}>
            <div className="card-body">
                <h1 className="card-title border-0 m-0 px-0">{heading}</h1>
                <button className='p-2 rounded bg-transparent'>
                    {buttontext}
                </button>
                <p className="card-text my-2 sub-heading">{subheading}</p>
                <hr style={{height:"2px",border: "0.5px solid #1D1C1C"}}/>
                <p className="card-text sub-heading fw-normal" style={{fontSize:"13px"}}>{content}</p>
                <a href={learnMoreLink} className='text-color font-3 fw-bold'>
                    Learn More  <i class="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    );
};


export default function Pricing() {
    const features = ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 2', 'Feature 3'];


    return (
        <div className="p-md-5">
            <p className="w-100 text-center pricing-heading font-2">Pricing</p>
            <h2 className="w-100 text-center text-font ">Find the right plan for you</h2>
            <div className="d-flex gap-3 justify-content-center py-5">
                <p style={{ color: "#E61616" }}>Plans for everyone</p>
                <AccessibleToggleSwitch />
                <p>Plans for everyone</p>
            </div>
            <div className='row'>
                <div className="col-lg-2 col-sm-2 col-md-2 text-center">
                </div>
                <div className="col-lg-9 col-sm-9 col-md-9 d-flex p-4 rounded-2 d-flex justify-content-between flex-wrap" style={{ backgroundColor: "#E2E2E2" }}>
                    <h2 className='m-0 px-md-4 text-font font-1'>
                        Enterprise Plan
                    </h2>
                    <div className='px-2'></div>
                    <div>
                        <p className='m-0 text-font font-3'>For big businesses looking to fuel their growth and connect with customers globally.</p>
                        <p className='text-color m-0 text-font font-3' style={{ fontSize: "12px" }}>View Enterprise Plan<i class="fa-solid fa-arrow-right-long ms-2"></i></p>
                    </div>
                </div>
                <div className="col-lg-1 col-sm-1 col-md-1 text-center">



                </div>
            </div>



            <div className="container py-5">
                <div className="d-flex justify-content-center flex-wrap gap-3">



                    <PricingCard
                        heading="Starter"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        price="1000"
                        features={["Feature A", "Feature B", "Feature C", "Feature D", "Feature A", "Feature B", "Feature C"]}
                        featureBgColor="#FFFBD6" // Customize feature background color
                    />





                    <PricingCard
                        heading="Elevate"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        price="1000"
                        features={features}
                        featureBgColor=" #D4FAEC" // Customize feature background color
                    />




                    <PricingCard
                        heading="Elevate"
                        paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                        price="1000"
                        features={["A", "B", "C", "D"]}
                        featureBgColor="#D4FAEC" // Customize feature background color
                    />



                </div>
            </div>


            {/*  */}
            <div className='row py-5'>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 text-center">

                    <h2 className='text-font fw-bold  font-1'>How your price is calculated</h2>
                    <p style={{ color: "#1D1C1C", fontSize: "13px" }}><b>Choose your plan</b> and any add-on modules that align
                        with your goals. We'll look at how many domains you want to include in your plan and use third-party software to understand your estimated site traffic and determine your final price.</p>
                </div>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>

            </div>
            <div className='text-center row'>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6">

                    <h1 className='text-font text-start'><b> Frequently asked questions </b></h1>
                    <Faq

                        title="100Hel0"
                        description="*******************************************"
                    />
                    <Faq

                        title="Question 3"
                        description="####################################"
                    />
                    <Faq

                        title="Question 3"
                        description="####################################"
                    /> <Faq

                        title="Question 3"
                        description="####################################"
                    /> <Faq

                        title="Question 3"
                        description="####################################"
                    /> <Faq

                        title="Question 3"
                        description="####################################"
                    />
                    <Faq

                        title="Question 3"
                        description="####################################"
                    />
                </div>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>
            </div>
            <div className='row py-5'>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>
                <div className="col-lg-6 col-sm-6 col-md-6 text-center">

                    <h2 className='text-font' style={{fontSize:"33px"}}>

                        All add-on modules to Standard

                    </h2>
                    <p className='font-3'>

                        Amplify your plan with optional add-ons for stronger results in key areas.
                        <br></br>
                        <b> 
                            <a href='#' style={{textDecoration: "underline"}}>
                            
                            Reach out for pricing and more info.
                            </a>
                            </b>

                    </p>
                </div>
                <div className="col-lg-3 col-sm-3 col-md-3">
                </div>

            </div>


            <div className='d-flex justify-content-start gap-3 flex-wrap ps-md-4'>

                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Keep your review content fresh with unlimited automated review invitations"
                    content="Make sure new prospects find fresh and trustworthy reviews about your business to support decision-making."
                    learnMoreLink="#"
                />

                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />

                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />
                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />
                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />
                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />
                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />
                <MyCard
                    heading="Title"
                    buttontext="Included in the Scale plan"

                    subheading="Lorem Ipsum dolor sit amet"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    learnMoreLink="#"
                />

            </div>
        </div>

    )
}