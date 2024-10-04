import React from 'react';

function CoursesContent() {
  return (
    <div>
      <div class="container-fluid p-0">

<h1 class="h3 mb-3"><strong>Approve Courses</strong></h1>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                {/* @* <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary me-md-2" onclick="location.href='@Url.Action("Create", "Course")'">Add Course</button>
                </div> *@ */}
            </div>
            <div class="card-body">
                <table id="datatables-reponsive" class="table table-striped" style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>CourseId</th>
                            <th>CourseName</th>
                            <th>DepartmentId</th>
                            <th>SubjectId</th>
                            <th>CourseTypeId</th>
                            <th>Duration</th>
                            <th>CreditPoints</th>
                            <th>Active</th>
                            <th>IsApproved</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* @foreach (var item in Model) */}
                        {
                            <tr>
                                {/* <td> </td>
                                <td> </td>
                                <td></td>
                                <td> @Html.DisplayFor(modelItem => item.Subject.Name)</td>
                                <td> @Enum.GetName(typeof(Constant.CourseType), item.CourseTypeId)</td>
                                <td> @Html.DisplayFor(modelItem => item.Duration)</td>
                                <td> @Html.DisplayFor(modelItem => item.CreditPoints)</td> */}
                                <td>
                                    {/* @if (item.Active) */}
                                    {/* {
                                        <text>True</text>
                                    } */}
                                    {/* else
                                    {
                                        <text>False</text>
                                    } */}
                                </td>
                                <td>
                                    {/* @if (item.IsApproved == true) */}
                                    {/* {
                                        <text>True</text>
                                    } */}
                                    {/* else
                                    {
                                        <text>False</text>
                                    } */}
                                </td>
                                {/* <td>
                                    <a asp-action="Approve" asp-route-id="@item.Id">@Localizer["Approve"]</a> |
                                    <a asp-action="Delete" asp-route-id="@item.Id">@Localizer["Delete"]</a>
                                </td> */}
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

export default CoursesContent;