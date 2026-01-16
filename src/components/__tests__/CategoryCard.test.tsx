import { render, screen } from '@testing-library/react';
import CategoryCard from '../CategoryCard';

describe('CategoryCard', () => {
  it('renders category title correctly', () => {
    render(
      <CategoryCard
        image="/test-category.jpg"
        title="Test Category"
        href="/test-category"
      />
    );

    expect(screen.getByText('Test Category')).toBeInTheDocument();
  });

  it('renders "See Details" button', () => {
    render(
      <CategoryCard
        image="/test-category.jpg"
        title="Test Category"
        href="/test-category"
      />
    );

    expect(screen.getByText('See Details')).toBeInTheDocument();
  });

  it('has correct href attribute', () => {
    const { container } = render(
      <CategoryCard
        image="/test-category.jpg"
        title="Test Category"
        href="/catalogue"
      />
    );

    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', '/catalogue');
  });

  it('applies background image correctly', () => {
    const { container } = render(
      <CategoryCard
        image="/test-category.jpg"
        title="Test Category"
        href="/test-category"
      />
    );

    const backgroundDiv = container.querySelector('.bg-cover');
    expect(backgroundDiv).toHaveStyle({ backgroundImage: "url('/test-category.jpg')" });
  });
});
