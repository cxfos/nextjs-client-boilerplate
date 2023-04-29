import {render, screen} from '@testing-library/react';
import Document from '..';

describe('<Document />', () => {

    test('Should render successufully', () => {
        render(<Document />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});