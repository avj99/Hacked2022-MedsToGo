import React from 'react'
import { Link } from "react-router-dom";
import "../assets/bootstrap/css/bootstrap.min.css"
import "../assets/bootstrap/css/custom.css"

export default function Profile() {

    return(
<div id="wrapper">
        <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
          <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#">
              <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink" /></div>
              <div className="sidebar-brand-text mx-3"><span>MEDS TO GO</span></div>
            </a>
            <hr className="sidebar-divider my-0" />
            <ul className="navbar-nav text-light" id="accordionSidebar">
            <li className="nav-item"><Link className="nav-link" to="/"><i className="fas fa-tachometer-alt fa-5x" /><span class="custom-text">Dashboard</span></Link></li>
            <li className="nav-item"><Link className="nav-link active" to="/Profile"><i className="fas fa-user fa-5x" /><span class="custom-text">Profile</span></Link></li>
            <li className="nav-item"><Link className="nav-link" to="/Login"><i className="fa fa-sign-out fa-5x" /><span class="custom-text">Log out</span></Link></li>
            </ul>
            <div className="text-center d-none d-md-inline"><button className="btn rounded-circle border-0" id="sidebarToggle" type="button" /></div>
          </div>
        </nav>
        <div className="d-flex flex-column" id="content-wrapper">
          <div id="content">
            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
              <div className="container-fluid"><button className="btn btn-link d-md-none rounded-circle me-3" id="sidebarToggleTop" type="button"><i className="fas fa-bars" /></button>
                <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group" />
                </form>
                <ul className="navbar-nav flex-nowrap ms-auto">
                  <li className="nav-item dropdown d-sm-none no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><i className="fas fa-search" /></a>
                    <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                      <form className="me-auto navbar-search w-100">
                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                          <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search" /></button></div>
                        </div>
                      </form>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw" /></a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="me-3">
                            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 12, 2019</span>
                            <p>A new monthly report is ready to download!</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="me-3">
                            <div className="bg-success icon-circle"><i className="fas fa-donate text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 7, 2019</span>
                            <p>$290.29 has been deposited into your account!</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="me-3">
                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white" /></div>
                          </div>
                          <div><span className="small text-gray-500">December 2, 2019</span>
                            <p>Spending Alert: We've noticed unusually high spending for your account.</p>
                          </div>
                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item dropdown no-arrow mx-1">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw" /></a>
                      <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                        <h6 className="dropdown-header">alerts center</h6><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar4.jpeg" />
                            <div className="bg-success status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I've been having.</span></div>
                            <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar2.jpeg" />
                            <div className="status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                            <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar3.jpeg" />
                            <div className="bg-warning status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Last month's report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                            <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                          </div>
                        </a><a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="dropdown-list-image me-3"><img className="rounded-circle" src="assets/img/avatars/avatar5.jpeg" />
                            <div className="bg-success status-indicator" />
                          </div>
                          <div className="fw-bold">
                            <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</span></div>
                            <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                          </div>
                        </a><a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                      </div>
                    </div>
                    <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown" />
                  </li>
                  <div className="d-none d-sm-block topbar-divider" />
                  <li className="nav-item dropdown no-arrow">
                    <div className="nav-item dropdown no-arrow"><a className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" href="#"><span className="d-none d-lg-inline me-2 text-gray-600 small">Anna Hemmingway</span><img className="border rounded-circle img-profile" src="assets/img/avatars/avatar1.jpeg" /></a>
                      <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in"><a className="dropdown-item" href="#"><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400" />&nbsp;Profile</a><a className="dropdown-item" href="#"><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400" />&nbsp;Settings</a><a className="dropdown-item" href="#"><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400" />&nbsp;Activity log</a>
                        <div className="dropdown-divider" /><a className="dropdown-item" href="#"><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400" />&nbsp;Logout</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="container-fluid">
              <h3 className="text-dark mb-4">Profile</h3>
              <div className="row mb-3">
                <div className="col-lg-4">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Health Card</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small fw-bold" />
                      <h1 style={{fontSize: '15px'}}>Alberta Health Services</h1>
                      <h1 style={{fontSize: '22px'}}>11424-5721</h1>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Identification</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small fw-bold" />
                      <h1 style={{fontSize: '15px'}}>Driver's License</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>100241-298</h1>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Doctor</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small fw-bold" />
                      <h1 style={{fontSize: '15px'}}>Name</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>Dr. John Doe</h1>
                      <h1 style={{fontSize: '15px'}}>License</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>0241-513</h1>
                      <h1 style={{fontSize: '15px'}}>Clinic</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>Kaye Edmonton Clinic</h1>
                    </div>
                  </div>
                  <div className="card shadow mb-4">
                    <div className="card-header py-3">
                      <h6 className="text-primary fw-bold m-0">Insurance</h6>
                    </div>
                    <div className="card-body">
                      <h4 className="small fw-bold" />
                      <h1 style={{fontSize: '15px'}}>Group Policy Holder</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>University of Alberta SU Health &amp; Dental Plan</h1>
                      <h1 style={{fontSize: '15px'}}>Insurance Company</h1>
                      <h1 style={{fontSize: '22px'}} />
                      <h1 style={{fontSize: '22px'}}>Desjardins Insurance</h1>
                      <h1 style={{fontSize: '15px'}}>Carrier</h1>
                      <h1 style={{fontSize: '22px'}}>51</h1>
                      <h1 style={{fontSize: '15px'}}>Group Number</h1>
                      <h1 style={{fontSize: '22px'}}>Q1105</h1>
                      <h1 style={{fontSize: '15px'}}>ID</h1>
                      <h1 style={{fontSize: '22px'}}>001570210</h1>
                      <h1 style={{fontSize: '22px'}} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="row mb-3 d-none">
                    <div className="col">
                      <div className="card textwhite bg-primary text-white shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0"><strong>65.2%</strong></p>
                            </div>
                            <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                          </div>
                          <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card textwhite bg-success text-white shadow">
                        <div className="card-body">
                          <div className="row mb-2">
                            <div className="col">
                              <p className="m-0">Peformance</p>
                              <p className="m-0"><strong>65.2%</strong></p>
                            </div>
                            <div className="col-auto"><i className="fas fa-rocket fa-2x" /></div>
                          </div>
                          <p className="text-white-50 small m-0"><i className="fas fa-arrow-up" />&nbsp;5% since last month</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <div className="card shadow mb-3">
                        <div className="card-header py-3">
                          <p className="text-primary m-0 fw-bold">User Settings</p>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="email"><strong>Email Address</strong></label><input className="form-control" type="email" id="email" placeholder="user@example.com" name="email" /></div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="first_name"><strong>First Name</strong></label><input className="form-control" type="text" id="first_name" placeholder="John" name="first_name" /></div>
                              </div>
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="last_name"><strong>Last Name</strong></label><input className="form-control" type="text" id="last_name" placeholder="Doe" name="last_name" /></div>
                              </div>
                            </div>
                          </form><button className="btn btn-primary" type="button">Change Password</button>
                        </div>
                      </div>
                      <div className="card shadow" style={{marginBottom: '16px'}}>
                        <div className="card-header py-3">
                          <p className="text-primary m-0 fw-bold">Home</p>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="mb-3"><label className="form-label" htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" id="address" placeholder="Sunset Blvd, 38" name="address" /></div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" id="city" placeholder="Los Angeles" name="city" /></div>
                              </div>
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="country"><strong>Country</strong></label><input className="form-control" type="text" id="country" placeholder="USA" name="country" /></div>
                              </div>
                            </div>
                            <div className="mb-3" />
                          </form>
                        </div>
                      </div>
                      <div className="card shadow">
                        <div className="card-header py-3">
                          <p className="text-primary m-0 fw-bold">Pharmacy</p>
                        </div>
                        <div className="card-body">
                          <form>
                            <div className="mb-3"><label className="form-label" htmlFor="address"><strong>Name</strong></label></div><input className="form-control" type="search" placeholder="Rexall Pharmacy Ltd." />
                            <div className="mb-3"><label className="form-label" htmlFor="address"><strong>Address</strong></label><input className="form-control" type="text" id="address-3" placeholder="Jasper Avenue" name="address" /></div>
                            <div className="row">
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="city"><strong>City</strong></label><input className="form-control" type="text" id="city-1" placeholder="Edmonton" name="city" /></div>
                              </div>
                              <div className="col">
                                <div className="mb-3"><label className="form-label" htmlFor="country"><strong>Postal Code</strong></label><input className="form-control" type="text" id="country-1" placeholder="T5T 1V7" name="country" /></div>
                              </div>
                            </div>
                            <div className="mb-3" />
                          </form><button className="btn btn-primary" type="button">Change Pharmacy</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center" style={{marginBottom: '25px'}}><button className="btn btn-primary row" type="button" style={{width: '200px'}}>Save Changes</button></div>
          </div>
          <footer className="bg-white sticky-footer">
            <div className="container my-auto">
              <div className="text-center my-auto copyright"><span>Copyright © Delivery App 2022</span></div>
            </div>
          </footer>
        </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
      </div>
    );
}