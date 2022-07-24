import ProductCard from "../ProductCard";
import { Container, Row, Col } from 'reactstrap';

export default function ProductGrid({ data }) {

    return (
        <main className="flex-shrink-0">
            <Container>
                <h1 className="mt-5">Products</h1>
                <p className="lead">Compre em até 10x sem juros</p>
            </Container>

            <Container>
                <Row className="text-center mb-5">
                    {data.map(product => {
                        return <Col xs="12" md="6" lg="4" key={product.id}>
                            <ProductCard product={product} key={product.id} />
                        </Col>
                    })}
                </Row>
            </Container>

        </main>
    );
};