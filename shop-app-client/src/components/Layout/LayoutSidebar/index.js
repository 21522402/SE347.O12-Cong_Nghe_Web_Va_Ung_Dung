import Sidebar from "./Sidebar";

function LayoutSidebar({children}) {
    return ( 
        <div>
            <div style={{ display:'flex'}}>
                <Sidebar />
                <div style={{paddingLeft:'250px'}}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutSidebar;