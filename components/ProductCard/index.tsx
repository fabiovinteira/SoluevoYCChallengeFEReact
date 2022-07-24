import { Card, CardBody, List, CardTitle } from 'reactstrap';
import Favorites from "../Favorites";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PropsProductCard } from '../../pages/interfaces';


export default function ProductCard({ product }:PropsProductCard) {

    return (
        <Card className="mt-4">
            <CardBody>
                <Favorites productId={product.id} />
                <CardTitle tag="h4" className="mb-4 mt-2">{product.name}</CardTitle>
                <picture>
                    <img src={product.imageURL} className="img-fluid" style={{ maxHeight: 200 }} alt={product.name} />
                </picture>
                <List type="unstyled" className="mt-4 mb-4">
                    <li className="de text-muted">De: {product.salePrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</li>
                    <li className="por">Por: {product.listPrice.toLocaleString("pt-BR", { style: 'currency', currency: 'BRL' })}</li>
                </List>
            </CardBody>
        </Card>
    );
}