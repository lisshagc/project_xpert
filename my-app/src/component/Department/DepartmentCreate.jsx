import React from "react";

import '../../App.css';
import HeaderNav  from '../HeaderNav';
import FooterNav from '../FooterNav';
import Navbar from '../Navbar';

function DepartmentCreate() {
    return (
        <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 side-nav">          
              <Navbar />        
            </div>
            <div className="col-20 main-content">
              <div className="row" id="Headernav">
                <HeaderNav />
              </div>

      <div id="Dashboard" className="row mt-5">
        <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>CreateDepartment</strong></h1>
    <div class="row">
        <div class="col-12 col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">DepartmentForm</h5>
                    <h6 class="card-subtitle text-muted">ToCreateDepartment</h6>
                </div>
                <div class="card-body">
                    <form asp-action="Create">
                        <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                        <div class="mb-3">
                            <label asp-for="Name" class="form-label"></label>
                            <input asp-for="Name" class="form-control" placeholder="Name" fdprocessedid="d5b3tj"></input>
                            <span asp-validation-for="Name" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label asp-for="Active" class="form-label"></label><br />
                            <label class="switch"><input type="checkbox" asp-for="Active"></input><span class="slider round"></span></label>
                        </div>
                        <input class="btn btn-primary me-md-2" type="submit" value="Create" />
                        <button class="btn btn-primary" type="button" >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
      </div>
      <div className="row mt-5" id="Footer" >
                
                <FooterNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default DepartmentCreate;