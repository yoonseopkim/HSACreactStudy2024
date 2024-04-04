import {Nav} from "react-bootstrap";

function NavbarYs() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">메인화면</Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
                </Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavbarYs