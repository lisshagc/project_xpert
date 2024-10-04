import React from "react";
import { useParams } from "react-router-dom";
import './Department.js';

function DepartmentEdit() {
  const { id } = useParams();
    return (


      
      <div>
      <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>EditDepartment</strong></h1>
    <div class="row">
        <div class="col-12 col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">DepartmentForm</h5>
                    <h6 class="card-subtitle text-muted">ToEditDepartment</h6>
                </div>
                <div class="card-body">
                    <form asp-action="Edit">
                        <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                        <input type="hidden" asp-for="Id" />
                        <div class="mb-3">
                            <label asp-for="Name" class="form-label"></label>
                            <input asp-for="Name" class="form-control"  fdprocessedid="d5b3tj"></input>
                            <span asp-validation-for="Name" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label asp-for="Active" class="form-label"></label><br />
                            <label class="switch"><input type="checkbox" asp-for="Active"></input><span class="slider round"></span></label>
                        </div>
                        <input class="btn btn-primary me-md-2" type="submit" value="Edit" />
                        <button class="btn btn-primary" type="button" >Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
    );
  }
  
  export default DepartmentEdit;