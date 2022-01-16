import React from 'react'

export default function Home(){
    return (
            <div id="wrapper">
              <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                <div className="container-fluid d-flex flex-column p-0"><a className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" href="#"><img src="assets/img/clipboard-image-1.png" style={{width: '67px', height: '67px', filter: 'invert(100%)'}} />
                    <div className="sidebar-brand-icon rotate-n-15" />
                    <div className="sidebar-brand-text mx-3"><span>MEDS TO GO</span></div>
                  </a>
                  <hr className="sidebar-divider my-0" />
                  <ul className="navbar-nav text-light" id="accordionSidebar">
                    <li className="nav-item"><a className="nav-link active" href="index.html"><i className="fas fa-tachometer-alt" /><span>Dashboard</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="profile.html"><i className="fas fa-user" /><span>Profile</span></a></li>
                    <li className="nav-item"><a className="nav-link" href="table.html"><i className="fas fa-table" /><span>Prescription</span></a></li>
                    <li className="nav-item" />
                    <li className="nav-item"><a className="nav-link" href="register.html"><i className="fa fa-sign-out" /><span>Log out</span></a></li>
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
                        <li className="nav-item dropdown no-arrow" />
                      </ul>
                      <h1 style={{fontSize: '20px'}}>Anna Hemmingway </h1>
                    </div>
                  </nav>
                  <div className="container-fluid">
                    <div className="d-sm-flex justify-content-between align-items-center mb-4">
                      <h3 className="text-dark mb-0">Dashboard</h3>
                      <div className="dropdown show"><button className="btn btn-primary dropdown-toggle" aria-expanded="true" data-bs-toggle="dropdown" type="button"><i className="fas fa-shopping-cart fa-sm text-white-50" style={{paddingRight: '10px'}} />Order</button>
                        <div className="dropdown-menu show"><a className="dropdown-item" href="#" data-toggle="modal" data-target="#modal1" data-bs-target="#modal1" data-bs-toggle="modal">New medication</a><a className="dropdown-item" href="#" data-bs-target="#modal-3" data-bs-toggle="modal">Request Refill</a><a className="dropdown-item" href="#" data-bs-target="#modal-2" data-bs-toggle="modal">Order Refill</a></div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-start-primary py-2">
                          <div className="card-body">
                            <div className="row align-items-center no-gutters">
                              <div className="col me-2">
                                <div className="text-uppercase text-primary fw-bold text-xs mb-1"><span>CURRENT ORDER</span></div>
                                <div className="text-dark fw-bold h5 mb-0"><span>PROCESSING</span></div>
                              </div>
                              <div className="col-auto"><i className="fas fa-box fa-2x text-gray-300" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-start-success py-2">
                          <div className="card-body">
                            <div className="row align-items-center no-gutters">
                              <div className="col me-2">
                                <div className="text-uppercase text-success fw-bold text-xs mb-1"><span>Active medications</span></div>
                                <div className="text-dark fw-bold h5 mb-0"><span>7</span></div>
                              </div>
                              <div className="col-auto"><i className="fas fa-file-medical fa-2x text-gray-300" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-start-info py-2">
                          <div className="card-body">
                            <div className="row align-items-center no-gutters">
                              <div className="col me-2">
                                <div className="text-uppercase text-info fw-bold text-xs mb-1"><span>REFILLS</span></div>
                                <div className="row g-0 align-items-center">
                                  <div className="col-auto">
                                    <div className="text-dark fw-bold h5 mb-0 me-3"><span>10</span></div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto"><i className="fas fa-clipboard-list fa-2x text-gray-300" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-xl-3 mb-4">
                        <div className="card shadow border-start-warning py-2">
                          <div className="card-body">
                            <div className="row align-items-center no-gutters">
                              <div className="col me-2">
                                <div className="text-uppercase text-warning fw-bold text-xs mb-1"><span>TOTAL SPENDING</span></div>
                                <div className="text-dark fw-bold h5 mb-0"><span>$339.26</span></div>
                              </div>
                              <div className="col-auto"><i className="fas fa-dollar-sign fa-2x text-gray-300" /></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{margin: '22px'}}>
                    <div className="card shadow mb-4" style={{marginBottom: '105px'}}>
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary fw-bold m-0">Current Orders</h6>
                        <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                          <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                            <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                            <div className="dropdown-divider" /><a className="dropdown-item" href="#">&nbsp;Something else here</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body"><button className="btn btn-primary" type="button">Status: Processing</button><button className="btn btn-primary" type="button" style={{marginRight: '0px', marginLeft: '23px', background: 'var(--bs-indigo)', borderColor: 'var(--bs-indigo)'}}>Method: Delivery</button>
                        <div className="btn-toolbar" />
                        <div className="card" style={{marginBottom: '17px', marginTop: '27px'}}>
                          <div className="card-body" style={{marginBottom: '0px'}}>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4 col-xxl-5">
                                  <h4 style={{color: 'var(--bs-blue)', fontWeight: 'bold', marginBottom: '0px', textAlign: 'center'}}>Amoxicillin 250mg tablets</h4>
                                </div>
                                <div className="col-md-4 col-xxl-3">
                                  <h4 style={{textAlign: 'center'}}>10 refills remaining</h4>
                                </div>
                                <div className="col-md-4 col-xxl-4">
                                  <h4 style={{textAlign: 'center'}}>Accepted</h4>
                                  <p className="text-center">Expected delivery date: Jan 17</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="card" style={{marginBottom: '17px', marginTop: '27px'}}>
                          <div className="card-body" style={{marginBottom: '0px'}}>
                            <div className="container">
                              <div className="row">
                                <div className="col-md-4 col-xxl-5">
                                  <h4 style={{color: 'var(--bs-blue)', fontWeight: 'bold', marginBottom: '0px', textAlign: 'center'}}>Amoxicillin 250mg tablets</h4>
                                </div>
                                <div className="col-md-4 col-xxl-3">
                                  <h4 style={{textAlign: 'center'}}>10 refills remaining</h4>
                                </div>
                                <div className="col-md-4 col-xxl-4">
                                  <h4 style={{textAlign: 'center'}}>Request pending</h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{margin: '22px'}}>
                    <div className="card shadow mb-4">
                      <div className="card-header d-flex justify-content-between align-items-center">
                        <h6 className="text-primary fw-bold m-0">Past Orders</h6>
                        <div className="dropdown no-arrow"><button className="btn btn-link btn-sm dropdown-toggle" aria-expanded="false" data-bs-toggle="dropdown" type="button"><i className="fas fa-ellipsis-v text-gray-400" /></button>
                          <div className="dropdown-menu shadow dropdown-menu-end animated--fade-in">
                            <p className="text-center dropdown-header">dropdown header:</p><a className="dropdown-item" href="#">&nbsp;Action</a><a className="dropdown-item" href="#">&nbsp;Another action</a>
                            <div className="dropdown-divider" /><a className="dropdown-item" href="#">&nbsp;Something else here</a>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">Rexall Pharmacy Ltd (9540 163 St NW)</h4>
                            <h6 className="text-muted card-subtitle mb-2">January 15, 2021</h6>
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Medication</th>
                                    <th>Price</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Adderall</td>
                                    <td>$21.05</td>
                                  </tr>
                                  <tr>
                                    <td>Acetminophen</td>
                                    <td>$5.12</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <footer className="bg-white sticky-footer">
                  <div className="container my-auto">
                    <div className="text-center my-auto copyright"><span>Copyright © Delivery App 2022</span></div>
                  </div>
                </footer>
                <div className="modal fade" role="dialog" tabIndex={-1} id="modal1">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Order New Medication</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <p />
                        <form style={{paddingBottom: '20px'}}><label className="form-label">Upload Prescription</label><input className="form-control" type="file" /><label className="form-label" style={{paddingTop: '11px'}}>Pharmacy</label><select className="form-select">
                            <optgroup label="Pharmacies">
                              <option value={12} selected>Rexall</option>
                              <option value={13}>Shoppers 2</option>
                              <option value={14}>This is item 3</option>
                            </optgroup>
                          </select><label className="form-label" style={{paddingTop: '11px'}} />
                          <div className="container">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-1" name="method" defaultValue="pickup" required /><label className="form-check-label" htmlFor="formCheck-1">Pickup</label></div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-2" name="method" defaultValue="delivery" required /><label className="form-check-label" htmlFor="formCheck-2">Delivery</label></div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Cancel</button><button className="btn btn-primary" type="button">Order</button></div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" role="dialog" tabIndex={-1} id="modal-2">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Order Medication Refill</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <p>Order a refill for past medications here. If your medication is not shown below, you will have to submit a request for refill to your pharmacy instead.</p>
                        <p />
                        <form style={{paddingBottom: '20px'}}><label className="form-label">Choose Medication to Refill</label><select className="form-select">
                            <optgroup label="Medications">
                              <option value={12} selected>Med 1</option>
                              <option value={13}>Med 2</option>
                              <option value={14}>Med 3</option>
                            </optgroup>
                          </select><label className="form-label" style={{paddingTop: '11px'}}>Pharmacy</label><select className="form-select">
                            <optgroup label="Pharmacies">
                              <option value={12} selected>Rexall</option>
                              <option value={13}>Shoppers 2</option>
                              <option value={14}>This is item 3</option>
                            </optgroup>
                          </select></form>
                        <div className="container">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-3" name="method" defaultValue="pickup" required /><label className="form-check-label" htmlFor="formCheck-3">Pickup</label></div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-check"><input className="form-check-input" type="radio" id="formCheck-4" name="method" defaultValue="delivery" required /><label className="form-check-label" htmlFor="formCheck-4">Delivery</label></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Cancel</button><button className="btn btn-primary" type="button">Order</button></div>
                    </div>
                  </div>
                </div>
                <div className="modal fade" role="dialog" tabIndex={-1} id="modal-3">
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title">Request For Refill</h4><button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                      </div>
                      <div className="modal-body">
                        <p>Submit a request for medication refill to your pharmacy.</p>
                        <p />
                        <form style={{paddingBottom: '20px'}}><label className="form-label">Choose Medication to Request Refill</label><select className="form-select">
                            <optgroup label="Medications">
                              <option value={12} selected>Med 1</option>
                              <option value={13}>Med 2</option>
                              <option value={14}>Med 3</option>
                            </optgroup>
                          </select><label className="form-label" style={{paddingTop: '11px'}}>Pharmacy</label><select className="form-select">
                            <optgroup label="Pharmacies">
                              <option value={12} selected>Rexall</option>
                              <option value={13}>Shoppers 2</option>
                              <option value={14}>This is item 3</option>
                            </optgroup>
                          </select></form>
                      </div>
                      <div className="modal-footer"><button className="btn btn-light" type="button" data-bs-dismiss="modal">Cancel</button><button className="btn btn-primary" type="button">Request Refill</button></div>
                    </div>
                  </div>
                </div>
              </div><a className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up" /></a>
            </div>
          );
  
}
