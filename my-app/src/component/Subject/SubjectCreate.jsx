import React from 'react';

function SubjectCreate() {
  return (
    <div>
      <div class="container-fluid p-0">
    <h1 class="h3 mb-3"><strong>CreateSubject</strong></h1>
    <div class="row">
        <div class="col-12 col-xl-6">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-title">SubjectForm</h5>
                    <h6 class="card-subtitle text-muted">ToCreateSubject</h6>
                </div>
                <div class="card-body">
                    <form asp-action="Create">
                        <div asp-validation-summary="ModelOnly" class="text-danger"></div>
                        <div class="mb-3">
                            <label asp-for="Name" class="form-label"></label>
                            <input asp-for="Name" class="form-control" placeholder="Name" fdprocessedid="d5b3tj" />
                            <span asp-validation-for="Name" class="text-danger"></span>
                        </div>
                        <div class="mb-3">
                            <label asp-for="Active" class="form-label"></label><br />
                            <label class="switch"><input type="checkbox" asp-for="Active" /><span class="slider round" ></span></label>
                        </div>
                        <div class="mb-3">
                            <label asp-for="Description" class="form-label"></label>
                            <textarea asp-for="Description" class="form-control" placeholder="Description" rows="4"></textarea>
                            <span asp-validation-for="Description" class="text-danger"></span>
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
  );
}

export default SubjectCreate;