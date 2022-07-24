import { Nav } from 'reactstrap';

export default function Top() {
    return (
        <header>
            <Nav className="navbar navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Soluevo React Test</a>
                </div>
            </Nav>
        </header>
    )
}