import {render, screen} from '@testing-library/react';
import App from '..';

describe('<App />', () => {

    test('Should render successufully', () => {
        render(<App />);

        expect(screen.getByRole('main')).toBeInTheDocument();
    });
});