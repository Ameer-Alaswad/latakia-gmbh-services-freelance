
import { render } from '@testing-library/react';
import DevelopedBy from "../index"
import '@testing-library/jest-dom';

test('renders DevelopedBy component', () => {
    const { getByText } = render(<DevelopedBy />);

    expect(getByText('Designed and Developed by')).toBeInTheDocument();
    // expect(getByText('Designer Name')).toBeInTheDocument();
});
test('renders DevelopedBy component', () => {
    const { getByText } = render(<DevelopedBy />);

    expect(getByText('Ameer Alaswad')).toBeInTheDocument();
});