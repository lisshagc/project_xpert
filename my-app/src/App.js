
import './App.css';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom';
import Login from './component/Login';
import Home from './Home.jsx';
import Department from './component/Department/Department.jsx';
import Subject from './component/Subject/Subject.jsx';
import Teacher from './component/Teacher/Teacher.jsx';
import AdminUser from './component/AdminUser/AdminUser.jsx';
import Course from './component/Course/Course.jsx';
import Student from './component/Student/Student.jsx';
import DepartmentCreate from './component/Department/DepartmentCreate.jsx';
import DepartmentEdit from './component/Department/DepartmentEdit.jsx';
import DepartmentDetails from './component/Department/DepartmentDetails.jsx';
import DepartmentDelete from './component/Department/DepartmentDelete.jsx';
import EnrollCourse from './component/EnrollCourse/EnrollCourse.jsx';
import Courses from './component/Courses/Courses.jsx';
import Exams from './component/Exams/Exams.jsx';
import Setup from './component/Setup/Setup.jsx';

function App() {

  return (

    <Router>
      <div className="App">
        <Routes>               
          <Route path="/department" element={<Department />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/adminuser" element={<AdminUser />} />
          <Route path="/course" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<Login />} /> 
          <Route path="/home" element={<Home />} /> 
          <Route path="/student" element={<Student />} /> 
          <Route path="/exams" element={<Exams />} /> 
          <Route path="/enrollcourse" element={<EnrollCourse />} /> 
          <Route path="/setup" element={<Setup />} /> 
          <Route path="/departmentcreate" element={<DepartmentCreate />} /> 
          <Route path="/dedit/123" element={<DepartmentEdit />} />
          <Route path="/dview/123" element={<DepartmentDetails />} />
          <Route path="/ddelete/123" element={<DepartmentDelete />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;




















// <div>
    //   <Login />
    // </div>
    // <div className="App">
    //   <div className="container-fluid">
    //     <div className="row">
    //       <div className="col-2 side-nav">          
    //         <Navbar />
    //       </div>
    //       <div className="col-10 main-content">
    //         <div className="row">
    //           <HeaderNav />
    //         </div>
    //         <div className="row mt-5">
    //           <Dashboard />
    //         </div>
    //         <div className="row mt-5">
    //           <FooterNav />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>