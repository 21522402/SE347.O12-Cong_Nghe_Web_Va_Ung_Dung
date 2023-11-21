import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div class=' bg-black text-white' >
            <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top">
                <div class="col mb-3">
                    <Link to="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <svg class="bi me-2" width="40" height="32"><use  to="#bootstrap"></use></svg>
                    </Link>
                    <p class="text-white">© 2023</p>
                </div>

                <div class="col mb-3">

                </div>

                <div class="col mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Home</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Features</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Pricing</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">FAQs</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">About</Link></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Home</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Features</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Pricing</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">FAQs</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">About</Link></li>
                    </ul>
                </div>

                <div class="col mb-3">
                    <h5>Section</h5>
                    <ul class="nav flex-column">
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Home</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Features</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">Pricing</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">FAQs</Link></li>
                        <li class="nav-item mb-2"><Link to="#" class="nav-link p-0 text-white">About</Link></li>
                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;