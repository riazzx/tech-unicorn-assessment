import logo from '../logo.svg'

function Footer () {
    return (
        <footer className="page-footer font-small blue pt-4" style={{backgroundColor: '#fff'}}>
    <div className="container-fluid  text-md-left">
        <div className="row">
            <div className="text-center col-md-5 mt-md-0 mt-3">
                <img src={logo} alt='logo' style={{maxWidth: '50%'}} />
                
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col" style={{justifyContent: 'start'}}>
                
                <ul className="list-unstyled">
                    <li><h2 style={{color: '#F86438', fontSize: '50px', fontWeight: 'bold'}}>Dealerz.</h2></li>
                    <li><a href="#!">Privacy Policy</a></li>
                    <li><a href="#!">Terms and Conditions</a></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                
                <ul className="list-unstyled">
                    <li><a href="#!">Facebook</a></li>
                    <li><a href="#!">Instagram</a></li>
                    <li><a href="#!">Twitter</a></li>
                    <li><a href="#!">TikTok</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2020 TanahAir Studio. All Rights Reserved.
        
    </div>

</footer>
    );
}

export default Footer;