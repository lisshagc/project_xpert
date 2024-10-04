import React from 'react';
import './Light.css';
import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import Department from './Department/Department';
import avatarImage from '../img/avatars/avatar-6.jpg'; 


function Navbar({  }) {

    const navigate = useNavigate(); // Initialize useNavigate

    const handleIconClick = () => {
    navigate('/home'); // Redirect to the Home page on click
    }

    const handleDepartmentClick = () => {
        navigate('/department'); // Redirect to the Department page
      };

    const handleSubjectClick = () => {
        navigate('/subject'); // Redirect to the subject page
      };

      const handleTeacherClick = () => {
        navigate('/teacher'); // Redirect to the teacher page
      };

      const handleAdminUserClick = () => {
        navigate('/adminuser'); // Redirect to the teacher page
      };
      const handleCourseClick = () => {
        navigate('/adminuser'); // Redirect to the teacher page
      };

      const handleStudentClick = () => {
        navigate('/student'); // Redirect to the teacher page
      };

      const handleEnrollCourseClick = () => {
        navigate('/enrollcourse'); // Redirect to the teacher page
      };

      const handleCoursesClick = () => {
        navigate('/courses'); // Redirect to the teacher page
      };

      const handleExamsClick = () => {
        navigate('/exams'); // Redirect to the teacher page
      };

      const handleSetupClick = () => {
        navigate('/setup'); // Redirect to the teacher page
      };



  return (
<nav id="sidebar" class="sidebar js-sidebar">
    <div class="sidebar-content js-simplebar">
        <a class="sidebar-brand" href="/home">
            <span class="align-middle">Xpert</span>
        </a>

        <div class="sidebar-user">
            <div class="d-flex justify-content-center">
                <div class="flex-shrink-0" >
                    <img src={avatarImage} class="avatar img-fluid rounded me-1" alt="" id="imagePic"  />
                </div>
                <div class="flex-grow-1 ps-2">
                    <a class="sidebar-user-title dropdown-toggle" href="#" data-bs-toggle="dropdown"   >
                        Lissha
                    </a>
                    
                    <div class="dropdown-menu dropdown-menu-start">
                        <a class="dropdown-item" href="/profile"><i class="align-middle me-1" data-feather="user"></i> Profile</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="/profile">
                            <i class="align-middle me-1" data-feather="settings"></i> Settings&Privacy
                        </a>
                        <a class="dropdown-item" href="/profile"><i class="align-middle me-1" data-feather="help-circle"></i> HelpCenter</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" asp-area="" asp-controller="Home" asp-action="Logout">Logout</a>
                    </div>

                    <div class="sidebar-user-subtitle">Admin</div>
                
                </div>
          
            </div>
      

        </div>
        <ul class="sidebar-nav">
            <li class="sidebar-header">
                Pages
            </li>

            <li class="sidebar-item">
                <a class="sidebar-link" href="/home">
                    <i class="align-middle" data-feather="sliders" onClick={handleIconClick} ></i> <span class="align-middle">Dashboard</span>
                </a>
            </li>

      
                <li class="sidebar-header">
                  Master
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/department">
                        <i class="align-middle" data-feather="bar-chart-2" onClick={handleDepartmentClick} ></i> <span class="align-middle">Department</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/subject">
                        <i class="align-middle" data-feather="book-open" onClick={handleSubjectClick} ></i> <span class="align-middle">Subject</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/teacher">
                        <i class="align-middle" data-feather="user" onClick={handleTeacherClick} ></i> <span class="align-middle">Teacher</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/adminuser">
                        <i class="align-middle" data-feather="user" onClick={handleAdminUserClick} ></i> <span class="align-middle">AdminUser</span>
                    </a>
                </li>
            

                <li class="sidebar-header">
                            Academic
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="/course">
                                <i class="align-middle" data-feather="map"></i> <span class="align-middle" onClick={handleCourseClick} >Course</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="/student">
                                <i class="align-middle" data-feather="user"></i> <span class="align-middle" onClick={handleStudentClick} >Student</span>
                            </a>
                        </li>

                        <li class="sidebar-item">
                            <a class="sidebar-link" href="/enrollcourse">
                                <i class="align-middle" data-feather="user"></i> <span class="align-middle" onClick={handleEnrollCourseClick} >EnrollCourse</span>
                            </a>
                        </li>


                <li class="sidebar-header">
                    Approve
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/courses">
                        <i class="align-middle" data-feather="map"></i> <span class="align-middle" onClick={handleCoursesClick}  >Courses<span id="courseCount" class="sidebar-badge badge bg-primary"></span></span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/exams">
                        <i class="align-middle" data-feather="map"></i> <span class="align-middle" onClick={handleExamsClick} >Exams<span id="examCount" class="sidebar-badge badge bg-primary"></span></span>
                    </a>
                </li>
              

                <li class="sidebar-header">
                            Exam
                        </li>
                        <li class="sidebar-item">
                            <a class="sidebar-link" href="/setup">
                                <i class="align-middle" data-feather="edit"></i> <span class="align-middle" onClick={handleSetupClick} >Setup</span>
                            </a>
                </li>
            

        </ul>
    </div>
</nav>


  );
}

export default Navbar;