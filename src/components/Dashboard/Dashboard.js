import React, { useEffect, useState } from 'react';
// import DashboardHome from './DashboardHome';
// import DashboardReviews from './DashboardReviews';
import Chicken from "../../Assests/chicken.jpg";
import Rate from "../../Assests/rating (1).svg";
import ProfileIcon from "../../Assests/ProfileLogin.svg";
import DashBoardNavbar from '../DashboardNavbar/DashboardNavbar';
import Navbar from '../DashboardNav/DashboardNav';
import Calendar from "../../Assests/calendar.svg";
import { Modal, Button, Form, InputGroup, FormControl } from 'react-bootstrap';
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
export function Card({ heading, paragraph, icon, backgroundColor }) {
    return (
        <div className="card p-2 text-white border-0" style={{
            backgroundColor,
            width: "256px",
        }}>
            <div className="card-body">
                <h6 className="card-title fw-normal m-0 p-0 py-1 border-0" style={{ fontSize: "20px" }} >{heading}</h6>
                <p className="card-text" style={{ fontSize: "20px" }}>{paragraph}</p>
                <div className='text-end p-0'>
                    <i className={`fa-2x ${icon} p-0 m-0`}></i>
                </div>
            </div>
        </div>
    );
};
export function DashboardHome() {
    const currentDate = new Date();
    const options = {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    };

    // Format current date and time
    const formattedDate = currentDate.toLocaleString('en-US', options);
    const formattedEndDate = new Date(currentDate.getTime() + 1000 * 60 * 60).toLocaleString('en-US', options);



    return (
        <>
            <div className='d-flex flex-wrap justify-content-between align-items-center'>
                <h3>Dashboard</h3>
                <div className="input-group bg-white m-0 p-0 d-flex justify-content-center align-items-center" style={{ maxWidth: "380px" }}>
                    <button className="btn m-0" type="button" id="datePickerBtn">



                        <i className="fas fa-calendar-alt h-100" style={{ color: "#E61616" }}></i>

                    </button>
                    <input type="text" className="form-control m-0 bg-transparent border-0 px-0" style={{ fontSize: "12px" }} value={`Today: ${formattedEndDate} - ${formattedDate}`} readOnly />
                    <i class="fa-solid fa-angle-down me-2"></i>
                </div>
            </div>
            <div className='d-flex justify-content-between my-4 gap-3'>
                <Card
                    heading="01"
                    paragraph="Active Sales"
                    icon="fas fa-star"
                    backgroundColor="#EA3986"
                />
                <Card
                    heading="02"
                    paragraph="Active Branches"
                    icon="fas fa-star"
                    backgroundColor="#F1C40F"
                />
                <Card
                    heading="03"
                    paragraph="Upcoming Products"
                    icon="fas fa-star"
                    backgroundColor="#18A4E1"
                />
                <Card
                    heading="50"
                    paragraph="Users Review"
                    icon="fas fa-star"
                    backgroundColor="#F98925"
                />
            </div>
            {/* <div class="w-100 row bg-white h-auto pb-0 pe-0 p-4 pt-2">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12 p-3" data-aos="fade-right">
                    <canvas id="myChart" class=" text-danger shadow rounded h-100"></canvas>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12 p-3" data-aos="fade-left">
                    <canvas id="myChart2" class="shadow rounded h-100"></canvas>
                </div>
            </div> */}
        </>
    )
}
// Dashboard Reviews
function RecentRewiesCards() {
    return (


        <div>
            <div className="RecentRewiesCards w-100 px-2 pt-3 border bg-white" style={{ maxWidth: "500px" }}>
                <div className='w-100 d-flex'>
                    <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                    <div className='px-2'>
                        <h5 class="font-1 bold px-1 py-1" style={{ opacity: "0.9", fontWeight: "600" }}>
                            Review Title
                        </h5>
                        <a
                            href=""
                            className="nav-links  multi font-2 semibold w-100 p-0"
                            id=""
                            role="a"
                            aria-expanded="false"
                        >
                            <img src={ProfileIcon} alt="" className="nav-icon" />
                            Yasir Ali
                        </a>
                        <br></br>
                        <small className="ratingsRecentReviews py-2 px-0 m-0">
                            <img src={Rate} alt="tating.." />
                            <img src={Rate} alt="tating.." />
                            <img src={Rate} alt="tating.." />
                            <img src={Rate} alt="tating.." />
                            <img src={Rate} alt="tating.." />
                            <span className='p-0 m-0 ms-3 '>3/5</span>
                        </small>
                        <span className='font-3 dateTime px-1 m-0'>09/10/2023 02:50 PM</span>
                        <p className='font-3 pb-1 pt-3'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            <a className='text-danger'>Read More</a>
                        </p>
                        <div className='d-flex border-0 justify-content-between'>
                            <p className='p-0 m-0'>Islamabad</p>
                            <p className='p-0 m-0 text-danger border-0'>&#9825; 20 Likes</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export function DashboardReviews() {
    return (
        <>

            <div className='d-flex flex-wrap justify-content-between align-items-center py-3'>
                <h3>User Reviews</h3>
                <div className='d-flex justify-content-center align-items-center'>
                    <h6 className="h-100 text-center p-0 m-0 w-100" style={{ fontSize: "13px", color: "#484848" }}>Filter by</h6>

                    <select className="form-select" aria-label="Default select example" style={{ height: "47px", width: "200px", fontSize: "12px", color: "#484848" }}>
                        <option selected >Recent</option>
                        <option value="1">Option 1</option>
                        <option value="2">Option 2</option>
                        <option value="3">Option 3</option>
                    </select>
                </div>
            </div>


            <div className='d-flex justify-content-around flex-wrap gap-2'>
                <RecentRewiesCards />
                <RecentRewiesCards />
                <RecentRewiesCards />
                <RecentRewiesCards />
                <RecentRewiesCards />
                <RecentRewiesCards />
            </div>
        </>
    )
}
// Dashboard Sales 
function SalesCard() {
    return (
        <div>
            <div className="RecentRewiesCards w-100 px-2 pt-3 border bg-white" style={{ minWidth: "500px" }}>
                <div className='w-100 d-flex'>
                    <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                    <div className='px-2'>
                        <h5 class="font-1 bold px-1 py-1" style={{ opacity: "0.9", fontWeight: "600" }}>
                            Sale Title
                        </h5>
                        <p className='font-3 pb-1'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <div className="d-flex">
                            <img src={Calendar} alt="..." className="CategoryIcon" />
                            <p className="OfferDate font-2">5rd Jan - 30th Jan</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export function DashboardSales() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title className="text-center w-100 h5">Add New Sale</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label htmlFor="saleTitle" className="form-label">Sale Title</label>
                        <input type="text" className="form-control" id="saleTitle" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="saleDescription" className="form-label">Sale Description</label>
                        <textarea className="form-control" id="saleDescription" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="saleDate" className="form-label">Sale Date</label>
                        <input type="date" className="form-control" id="saleDate" />
                    </div>
                    <label htmlFor="saleDate" className="form-label">Gallery</label>

                    <div style={{ cursor: "pointer" }} className="d-flex flex-column py-3 justify-content-center align-items-center w-100 border">

                        <label htmlFor="fileInput" className="px-2 text-danger" >
                            <input type="file" id="fileInput" style={{ display: "none" }} />
                        </label>


                        <span className="font-3"><i class="fa-solid fa-image me-2"></i>Image should be less then 1mb (165 x 143)</span>
                    </div>
                    <div className="text-end mt-3">
                        <button type="button" className="btn btn-lg border py-2 px-5 rounded-0 me-2" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" className="btn btn-lg text-white py-2 px-5 rounded-0" style={{ backgroundColor: "#E61616" }}>Add</button>
                    </div>
                </Modal.Body>

            </Modal>
            <div className='d-flex flex-wrap justify-content-between align-items-center py-3'>
                <h3>Sales</h3>
                <button
                    type="button"
                    className="btn btn-outline-review"
                    style={{ borderRadius: "0px" }}
                    onClick={handleShow}

                >
                    Add New Sales
                </button>
            </div>
            <br></br>
            <h5>Ongoing Sales</h5>
            <br></br>
            <div className='d-flex justify-content-around gap-2' style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', '-ms-overflow-style': 'none', '::-webkit-scrollbar': { width: '0' } }}>
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
            </div>
            <br></br>
            <h5>Past Sales</h5>
            <br></br>

            <div className='d-flex justify-content-around gap-2' style={{ overflowX: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', '-ms-overflow-style': 'none', '::-webkit-scrollbar': { width: '0' } }}>
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
                <SalesCard />
            </div>
        </>
    )
}

// Dashboard Gallery

export function DashboardGallery() {
    return (
        <>
            <div className='d-flex flex-wrap justify-content-between align-items-center py-3'>
                <h3>Upcoming Products</h3>
                <button
                    type="button"
                    className="btn btn-outline-review"
                    style={{ borderRadius: "0px" }}

                >
                    Add Upcoming Products
                </button>
            </div>
            <br></br>
            <div className='d-flex justify-content-around gap-2 flex-wrap'>
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
                <img src={Chicken} alt="..." style={{ width: "154px", height: "138px" }} />
            </div>
        </>
    )
}
export default function Dashboard() {


    const [selectedComponent, setSelectedComponent] = useState('dashboard'); // Set default selected component to 'dashboard'

    const handleMenuItemClick = (item) => {
        setSelectedComponent(item);
    };

    return (
        <div className="container-fluid vh-100">
            <div className="row h-100">
                <div className="col-lg-2 p-0">
                    <DashBoardNavbar onItemClick={handleMenuItemClick} />
                </div>
                <div className="col-lg-10 p-0">
                    <Navbar />
                    <div className="p-3 m-0" style={{ backgroundColor: "#F3F4F5" }}>
                        <div className='container'>

                            {selectedComponent === 'reviews' && <DashboardReviews />}
                            {selectedComponent === 'dashboard' && <DashboardHome />}
                            {selectedComponent === 'sales' && <DashboardSales />}
                            {selectedComponent === 'gallery' && <DashboardGallery />}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
