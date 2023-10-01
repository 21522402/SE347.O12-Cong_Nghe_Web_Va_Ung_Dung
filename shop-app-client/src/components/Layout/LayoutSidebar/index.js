import Header from "./Header";
import Sidebar from "./Sidebar";

function LayoutSidebar({children}) {
    return ( 
        <div>
            <Header/>
            <div style={{paddingTop:'68px', display:'flex'}}>
                <Sidebar/>
                <div >{children}</div>
            </div>
        </div>
        );
}

export default LayoutSidebar;