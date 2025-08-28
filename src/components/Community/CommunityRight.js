import Calendar from "../../Assests/calendar.svg";
import Clothes from "../../Assests/clothes.svg";
import "./community.css";

export function ActiveMember() {
    return (
        <div className="container py-1 ">
            <div className="card p-2 member-card shadoww">
                <div className="card-body d-flex align-items-center">
                    <img 
                    src="https://img.freepik.com/free-vector/minimalist-geometric-judith-s-tiktok-profile-picture_742173-12131.jpg?t=st=1709188543~exp=1709192143~hmac=9000097cb6ea3b2156c9e7b295c039a8bd079589fc5ad3eb27005731974b95d3&w=740" alt="Profile Image" className="rounded-circle border prfile-img" />
                    <div className="px-3">
                        <h6 className="card-title p-0 m-0 border-0">YasirAli</h6>
                        <p className="card-text text-success" style={{ fontSize: "12px" }}>Online</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

//   export default ActiveMember;

export default function CommunityRight() {
    return (


        <div className="col-lg-4 col-sm-4 col-md-4 community-right-section">
            <h4 className="m-0">Active Member</h4>
            <p className="card-text" style={{ fontSize: "12px" }}>        12 people online
            </p>
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            <ActiveMember />
            {/* <SaleCard  /> */}
            {/* <SaleCard  /> */}
        </div>


    );
}
