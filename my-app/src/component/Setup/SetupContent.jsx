import React from 'react';

function SetupContent() {
  return (
    <div>
      <div class="container-fluid p-0">

<h1 class="h3 mb-3"><strong> Setup Exam</strong></h1>

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button class="btn btn-primary me-md-2" >Add Exam</button>
                </div>
            </div>
            <div class="card-body">
                <table id="datatables-reponsive" class="table table-striped" style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th>Exam Name</th>
                            <th>Course Name</th>
                            <th>Access Level</th>
                            <th>Question Count</th>
                            <th>Pass Percentage</th>
                            <th>Active</th>
                            <th>Is Approved</th>
                            <th>Created Date</th>
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
                            //             @if (item.Active)
                            //             {
                            //                 <text>True</text>
                            //             }
                            //             else
                            //             {
                            //                 <text>False</text>
                            //             }
                            //     </td>
                            //     <td>
                            //             @if (item.IsApproved == true)
                            //             {
                            //                 <text>True</text>
                            //             }
                            //             else
                            //             {
                            //                 <text>False</text>
                            //             }
                            //     </td>
                            //     <td> @Html.DisplayFor(modelItem => item.CreatedDate)</td>
                            //     <td>
                            //         <a asp-action="Edit" asp-route-id="@item.Id">@Localizer["Edit"]</a> |
                            //         <a asp-action="View" asp-route-id="@item.Id">@Localizer["View"]</a> |
                            //         <a asp-action="Delete" asp-route-id="@item.Id">@Localizer["Delete"]</a>
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

{/* <div class="modal fade" id="sizedModalSm" tabindex="-1" style="display: none;" aria-hidden="true">
<div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title"><strong>@Localizer["DeleteAdmin"]</strong></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body m-3">
            <p class="mb-0">

            </p>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">@Localizer["Close"]</button>
        </div>
    </div>
</div>
</div> */}

    </div>
  );
}

export default SetupContent;