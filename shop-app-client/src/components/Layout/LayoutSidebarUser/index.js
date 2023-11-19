import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

function LayoutSidebarUser({children}) {
    return ( 
        <div>
            <Header/>
            <div style={{ display:'flex', flexDirection: 'row', padding: '0 64px', marginTop: '64px', backgroundColor: '#d9d9d9'}}>
                <div style={{flex: 2}}>
                    <Sidebar />
                </div>
                <div style={{flex: 5, backgroundColor: 'white', marginTop: '10px', marginLeft: '64px', marginBottom: '10px', borderRadius: '10px'}}>{children}</div>
            </div>
            <Footer/>
        </div>
        );
}

export default LayoutSidebarUser;