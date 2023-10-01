import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
function Sidebar() {
    return (

        <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: "260px", position: 'fixed', top: '68px', left: 0, bottom:0 }}>
            <Link href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
                <span class="fs-4">Sidebar</span>
            </Link>
            <hr />
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <Link href="#" class="nav-link active" aria-current="page">
                        <svg class="bi pe-none me-2" width="16" height="16"><use href="#home"></use></svg>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="#" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"><use href="#speedometer2"></use></svg>
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="#" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"><use href="#table"></use></svg>
                        Orders
                    </Link>
                </li>
                <li>
                    <Link href="#" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"><use href="#grid"></use></svg>
                        Products
                    </Link>
                </li>
                <li>
                    <Link href="#" class="nav-link text-white">
                        <svg class="bi pe-none me-2" width="16" height="16"><use href="#people-circle"></use></svg>
                        Customers
                    </Link>
                </li>
            </ul>
            <hr />
            <div class="dropdown">
                <Link href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2" />
                    <strong>mdo</strong>
                </Link>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: 0, transform: 'translate3d(0px, -34px, 0px)'}}>
                    <li><Link class="dropdown-item" href="#">New project...</Link></li>
                    <li><Link class="dropdown-item" href="#">Settings</Link></li>
                    <li><Link class="dropdown-item" href="#">Profile</Link></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li><Link class="dropdown-item" href="#">Sign out</Link></li>
                </ul>
            </div>
        </div>


    );
}

export default Sidebar;