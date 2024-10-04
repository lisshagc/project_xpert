
import '../../App.css';
import HeaderNav  from '../HeaderNav';
import FooterNav from '../FooterNav';
import DepartmentContent from './DepartmentContent';
import Navbar from '../Navbar';
import DepartmentCreate from './DepartmentCreate';
import DepartmentDelete from './DepartmentDelete.jsx';

import './Department.js';
import DepartmentEdit from './DepartmentEdit.jsx';
function Department() {
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
              <div id="DepartmentContent"  className="row mt-5 Dashboard">
                <DepartmentContent />              
              </div>
              <div id="DepartmentCreate" className="row mt-5"  style={{ display: 'none' }}>
                <DepartmentCreate />              
              </div>
              <div id="DepartmentDelete" className="row mt-5"  style={{ display: 'none' }}>
                <DepartmentDelete />              
              </div>
              <div id="DepartmentEdit" className="row mt-5"  style={{ display: 'none' }}>
                <DepartmentEdit />              
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
  
  export default Department;