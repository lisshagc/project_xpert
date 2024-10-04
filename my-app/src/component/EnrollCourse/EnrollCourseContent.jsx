import React from 'react';

function EnrollCourseContent() {
  return (
    <div>
      <div class="container-fluid p-0">

<h1 class="h3 mb-3"><strong>Enroll Course</strong></h1>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                </div>
            </div>
            <div class="card-body">
                <table id="datatables-reponsive" class="table table-striped" style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>FirstName </th>
                            <th>LastName </th>
                            <th>Department </th>
                            <th>Subjects </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* @foreach (var item in Model) */}
                        {
                            <tr>
                                <td>Mansi </td>
                                <td>Patil </td>
                                <td>Computer Science </td>
                                <td>Dbms </td>
                                <td>
                                    <a asp-action="Assign" asp-route-id="@item.Id">Enroll</a>
                                </td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
</div>
    </div>
  );
}

export default EnrollCourseContent;