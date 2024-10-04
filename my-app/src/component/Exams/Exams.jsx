import '../../App.css';
import HeaderNav  from '../HeaderNav';
import FooterNav from '../FooterNav';
import ExamsContent from './ExamsContent';
import Navbar from '../Navbar';

function Exams() {
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
              <div id="Dashboard" className="row mt-5">
                <ExamsContent />              
              </div>
              
              <div className="row mt-5">
                <FooterNav />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    );
  }
  
  export default Exams;