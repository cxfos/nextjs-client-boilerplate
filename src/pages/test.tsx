import {render, screen} from '@testing-library/react';
import Home from '.';

describe('<Home />', () => {

    test('Should render successufully', () => {
        render(<Home />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});