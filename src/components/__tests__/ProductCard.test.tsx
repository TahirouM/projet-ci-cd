import { render, screen } from '@testing-library/react';
import ProductCard from '../ProductCard';

describe('ProductCard', () => {
  it('renders product information correctly', () => {
    render(
      <ProductCard
        image="/test-image.jpg"
        title="Test Product"
        description="Test description"
        price="99.99"
        id="test-product"
      />
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
  });

  it('generates product id from title when id is not provided', () => {
    const { container } = render(
      <ProductCard
        image="/test-image.jpg"
        title="My Test Product"
        description="Test description"
        price="99.99"
      />
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/product/my-test-product');
  });

  it('uses provided id when available', () => {
    const { container } = render(
      <ProductCard
        image="/test-image.jpg"
        title="Test Product"
        description="Test description"
        price="99.99"
        id="custom-id"
      />
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/product/custom-id');
  });

  it('renders image with correct src and alt', () => {
    render(
      <ProductCard
        image="/test-image.jpg"
        title="Test Product"
        description="Test description"
        price="99.99"
      />
    );

    const image = screen.getByAltText('Test Product');
    expect(image).toHaveAttribute('src', '/test-image.jpg');
  });
});
