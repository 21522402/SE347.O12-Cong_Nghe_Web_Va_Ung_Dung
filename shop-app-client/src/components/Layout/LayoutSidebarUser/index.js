import Footer from "./Footer";
import Header from "../LayoutNoSidebar/Header";
import Sidebar from "./Sidebar";

function LayoutSidebarUser({children}) {
    return ( 
        <div>
            <Header/>
            <div style={{ display:'flex', flexDirection: 'row', padding: '10px 64px', backgroundColor: '#f4f7fe'}}>
                <div style={{display: 'flex',flex: 2}}>
                    <Sidebar />
                </div>
                <div style={{flex: 5, backgroundColor: 'white', marginTop: '10px', marginLeft: '64px', marginBottom: '10px', borderRadius: '10px', boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'}}>{children}</div>
            </div>
            <Footer/>
        </div>
        );
}

export default LayoutSidebarUser;