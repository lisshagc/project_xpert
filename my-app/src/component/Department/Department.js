// utils.js
export function ShowDepartmentDataById(elementIdToShow) {
  // Define an array of the hard-coded IDs
  const ids = ['DepartmentCreate', 'DepartmentDelete', 'DepartmentEdit','DepartmentContent'];

  // Loop through each ID
  ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
          if (id === elementIdToShow) {
              // Show the element with the given id
              element.style.display = 'block';
          } else {
              // Hide all other elements
              element.style.display = 'none';
          }
      }
  });
}