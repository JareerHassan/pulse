import React from "react";
import Search from "../../Assests/search-interface-symbol.svg";
import PawPrint from "../../Assests/pawprint.svg";
import { Link } from "react-router-dom";

function AllCatregoryCardspara(props) {
  return <p className="font-2">{props.text}</p>;
}

function AllCatregoryCards(props) {
  return (
    <div className="col-lg-3 allCategoriesCard">
      <div
        className="allCategoriesCardHeader"
        style={{ backgroundColor: props.color }}
      >
        <img src={props.titleIcon} alt="..." />
        <p className="font-2">{props.title}</p>
      </div>
      <div className="allCategoriesCardBody">{props.children}</div>
    </div>
  );
}

export default function AllCatregory() {
  return (
    <div className="row AllCatregory">
      <div className="col-md-8 SearchSide" style={{ margin: "auto" }}>
        <div className="form">
          <input
            className="what"
            type="text"
            placeholder="What? e.g. Resturants, Store, Electronic"
            style={{ width: "50%", borderRadius: "5px 0px 0px 5px" }}
          />

          <div className="where">
            <input
              type="text"
              // className="where"
              placeholder="Where? e.g. Islamabad, Lahore"
            />
            <button className="font-2">
              <Link
                to="/findBuisnessReview"
                style={{ color: "inherit", style: "none" }}
              >
                <img
                  src={Search}
                  alt="..."
                  style={{ width: "14px", margin: "0px 0px 2px 0px" }}
                />
                Search
              </Link>
            </button>
          </div>
        </div>
        <p
          className="font-2"
          style={{ opacity: 0.7, margin: "auto", width: "fit-content" }}
        >
          By using this website, you are agreeing to our terms and conditions
        </p>
      </div>
      <div className=" SearchSide" style={{ marginTop: "40px" }}>
        <h4 class="font-1 bold" style={{ opacity: "0.9", fontWeight: "700" }}>
          Explore companies by category
        </h4>
      </div>
      <div className="allCategoriesCardsOuter ">
        {/* -----------Col-1--------- */}
        <AllCatregoryCards
          color="rgb(243 166 199)"
          title="Animals & Pets"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Animal Health" />
          <AllCatregoryCardspara text="Animal Parks & Zoo" />
          <AllCatregoryCardspara text="Cats & Dogs" />
          <AllCatregoryCardspara text="Horses & Riding" />
          <AllCatregoryCardspara text="Pet Services" />
          <AllCatregoryCardspara text="Pet Stores" />
        </AllCatregoryCards>

        <AllCatregoryCards
          color="#f7dac0"
          title="Beauty & Well-being"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Cosmetics & Makeup" />
          <AllCatregoryCardspara text="Hair Care & Styling" />
          <AllCatregoryCardspara text="Personal Care" />
          <AllCatregoryCardspara text="Salons & Clinics" />
          <AllCatregoryCardspara text="Tattoos & Piercings" />
          <AllCatregoryCardspara text="Wellness & Spa" />
          <AllCatregoryCardspara text="Yoga & Meditation" />
        </AllCatregoryCards>

        {/* -----------Col-2--------- */}

        <AllCatregoryCards
          color="#f1e3a9"
          title="Events & Entertainment"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Events & Venues" />
          <AllCatregoryCardspara text="Children's Entertainment" />
          <AllCatregoryCardspara text="Gaming" />
          <AllCatregoryCardspara text="Museums & Exhibits" />
          <AllCatregoryCardspara text="Music & Movies" />
          <AllCatregoryCardspara text="Theater & Opera" />
          <AllCatregoryCardspara text="Wedding & Party" />
        </AllCatregoryCards>

        <AllCatregoryCards
          color="#F1C40F"
          title="Food, Beverages & Tobacco"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Agriculture & Produce" />
          <AllCatregoryCardspara text="Asian Grocery Stores" />
          <AllCatregoryCardspara text="Bakery & Pastry" />
          <AllCatregoryCardspara text="Candy & Chocolate" />
          <AllCatregoryCardspara text="Coffee & Tea" />
          <AllCatregoryCardspara text="Food Production" />
          <AllCatregoryCardspara text="Fruits & Vegetables" />
          <AllCatregoryCardspara text="Grocery Stores & Markets" />
          <AllCatregoryCardspara text="Lunch & Catering" />
          <AllCatregoryCardspara text="Meat, Seafood & Eggs" />
          <AllCatregoryCardspara text="Smoking & Tobacco" />
        </AllCatregoryCards>

        {/* -----------Col-3--------- */}

        <AllCatregoryCards
          color="#a6d7ec"
          title="Home & Garden"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Bathroom & Kitchen" />
          <AllCatregoryCardspara text="Cultural Goods" />
          <AllCatregoryCardspara text="Decoration & Interior" />
          <AllCatregoryCardspara text="Energy & Heating" />
          <AllCatregoryCardspara text="Fabric & Stationery" />
          <AllCatregoryCardspara text="Furniture Stores" />
          <AllCatregoryCardspara text="Garden & Pond" />
          <AllCatregoryCardspara text="Home & Garden Services" />
          <AllCatregoryCardspara text="Home Goods Stores" />
          <AllCatregoryCardspara text="Home Improvements" />
        </AllCatregoryCards>

        <AllCatregoryCards
          color="#F1C40F"
          title="Home Services"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Cleaning Service Providers" />
          <AllCatregoryCardspara text="Craftsman" />
          <AllCatregoryCardspara text="House Services" />
          <AllCatregoryCardspara text="House Sitting & Security" />
          <AllCatregoryCardspara text="Moving & Storage" />
          <AllCatregoryCardspara text="Plumbing & Sanitation" />
          <AllCatregoryCardspara text="Repair Service Providers" />
        </AllCatregoryCards>

        {/* -----------Col-4--------- */}

        <AllCatregoryCards
          color="#f7dac0"
          title="Restaurants & Bars"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="African & Pacific Cuisine" />
          <AllCatregoryCardspara text="Bars & Cafes" />
          <AllCatregoryCardspara text="Chinese & Korean Cuisine" />
          <AllCatregoryCardspara text="European Cuisine" />
          <AllCatregoryCardspara text="General Restaurants" />
          <AllCatregoryCardspara text="Japanese Cuisine" />
          <AllCatregoryCardspara text="Mediterranean Cuisine" />
          <AllCatregoryCardspara text="Middle Eastern Cuisine" />
          <AllCatregoryCardspara text="North & South American Cuisine" />
          <AllCatregoryCardspara text="Southeast Asian Cuisine" />
          <AllCatregoryCardspara text="Takeaway" />
          <AllCatregoryCardspara text="Vegetarian & Diet" />
        </AllCatregoryCards>

        <AllCatregoryCards
          color="#F1C40F"
          title="Shopping & Fashion"
          titleIcon={PawPrint}
        >
          <AllCatregoryCardspara text="Accessories" />
          <AllCatregoryCardspara text="Clothing & Underwear" />
          <AllCatregoryCardspara text="Clothing Rental & Repair" />
          <AllCatregoryCardspara text="Costume & Wedding" />
          <AllCatregoryCardspara text="Jewelry & Watches" />
          <AllCatregoryCardspara text="Malls & Marketplaces" />
        </AllCatregoryCards>

        {/* <AllCatregoryCards color="#F1C40F" title="" titleIcon={PawPrint}>
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
          <AllCatregoryCardspara text="" />
        </AllCatregoryCards> */}
      </div>
    </div>
  );
}
