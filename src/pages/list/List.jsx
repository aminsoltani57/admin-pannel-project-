import React from 'react';
import Datatable from '../../components/datatable/Datatable';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/SideBar/Sidebar';

import "./list.scss"
const List = () => {
    return ( <div className='list'>
<Sidebar />
     <div className="listContainer">
        
         <Navbar />
         <Datatable />
     </div>

    </div> );
}
 
export default List;
