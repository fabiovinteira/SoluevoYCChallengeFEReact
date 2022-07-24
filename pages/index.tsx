import PageDefault from '../components/layout/PageDefault';
import ProductGrid from '../components/ProductGrid'
import ProductsData from './products.json';

export default function Home() {
  return (
    <PageDefault>
      <ProductGrid data={ProductsData} />
    </PageDefault>
  )
};