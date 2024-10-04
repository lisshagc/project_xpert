import React from 'react';

function ExamsContent() {
  return (
    <div>
      <div class="container-fluid p-0">

<h1 class="h3 mb-3"><strong>Approve Exam</strong></h1>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
            </div>
            <div class="card-body">
                <table id="datatables-reponsive" class="table table-striped" style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th> Exam Name</th>
                            <th>Course Name</th>
                            <th>Access Level</th>
                            <th>QuestionCount</th>
                            <th>PassPercentage</th>
                            <th>Active</th>
                            <th>IsApproved</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* @foreach (var item in Model) */}
                        {
                            // <tr>
                            //     <td> @Html.DisplayFor(modelItem => item.ExamName)</td>
                            //     <td> @Html.DisplayFor(modelItem => item.Course.CourseName)</td>
                            //     <td> @Html.DisplayFor(modelItem => item.AccessLevel)</td>
                            //     <td> @Html.DisplayFor(modelItem => item.QuestionCount)</td>
                            //     <td> @Html.DisplayFor(modelItem => item.PassPercentage)</td>
                            //     <td>
                            //         @if (item.Active)
                            //         {
                            //             <text>True</text>
                            //         }
                            //         else
                            //         {
                            //             <text>False</text>
                            //         }
                            //     </td>
                            //     <td>
                            //         @if (item.IsApproved == true)
                            //         {
                            //             <text>True</text>
                            //         }
                            //         else
                            //         {
                            //             <text>False</text>
                            //         }
                            //     </td>
                            //     <td>
                            //         <a asp-action="Approve" asp-route-id="@item.Id">@Localizer["Approve"]</a>
                            //     </td>
                            // </tr>
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

export default ExamsContent;