import Lists from "../../components/table/Lists"
import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/SideBar/Sidebar';
import Widget from '../../components/widgets/widget';
import "./home.scss"

const Home = () => {
    return ( <div className='home'>

   <Sidebar />
   <div className="container">
       <Navbar />
      <div className="widgets">
<Widget type="user" />
<Widget type="order" />
<Widget type="earning" />
<Widget type="balance" />


      </div>
      <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1}/>
      </div>
      <div className="listContainer">
          <div className="listTitle">
              Latest Transactions
          </div>
          <Lists />
      </div>
       </div>

    </div> );
}
 
export default Home;
