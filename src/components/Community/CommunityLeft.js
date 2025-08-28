import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
import Sale2 from "../../Assests/4318805.png";
import Sale1 from "../../Assests/5565175.png";


export function SaleCard() {
    return (
        <>
            <div className="col-4 myCol w-100">
                <div className="card" style={{border: "0.30000001192092896px solid #484848"}}>
                    <img
                        src={Sale1}
                        className="card-img-top"
                        alt="Product Image"
                        style={{ objectFit: "cover" }}
                    />

                    <div className="card-body">
                        <h5 className="card-title font-2">Sale Title</h5>

                        <div className="cardTextOuter  buisnessDetails">
                            <p className="cardInnerItem font-2 ">Business Name</p>
                            <div className="cardInnerItemCategory font-2">
                                <img src={Clothes} alt="..." className="CategoryIcon" />
                                <p className="categoryText font-2"> Fashion</p>
                            </div>
                        </div>
                        <p className="cardText font-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        </p>

                        <div className="cardTextOuter cardOuter">
                            <div className="OfferOuter">
                                <img src={Calendar} alt="..." className="CategoryIcon" />
                                <p className="OfferDate font-3">3rd October - 13th October </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default function CommunityLeft() {
    return (
        <div className="col-lg-3 col-sm-3 col-md-3">
            <h4 className="opacity-8">Featured Sales</h4>
            <SaleCard />
            <SaleCard />
            <SaleCard />
        </div>


    );
}
