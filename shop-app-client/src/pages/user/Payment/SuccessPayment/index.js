import { SuccessIcon } from "~/assets/icons";
function SuccessPayment() {
    return ( <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <div style={{margin: '150px 0px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <div>
                    <img src={SuccessIcon} style={{width: '100px'}} alt=""/>
                </div>
                <div style={{marginTop: '10px',fontSize: '28px', color: '#696969', fontWeight: '500'}}>Success!</div>
                <div style={{fontSize: '20px'}}>Your request has been processed successfully</div>
                <div style={{ marginTop: '20px',height: '50px', width: '200px', alignSelf: 'center', backgroundColor: '#224057', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                    <a href="/user" style={{color: 'white'}}>Continue shopping</a>
                </div>
            </div>
        </div>
    </> );
}

export default SuccessPayment;