import { render } from '@testing-library/react';
import { Header } from './';

describe('Header componnt', () => {
  it('should render Header with default value', () => {
    const { container } = render(<Header data-testid="header" />);
    const el = container;
    expect(el).toHaveTextContent('Busca de imagens');
  });
  it('should render Header with a set value', () => {
    const { getByTestId } = render(
      <Header data-testid="header" title="Testing" />,
    );
    const el = getByTestId('header');
    expect(el).toHaveTextContent('Testing');
  });
});
