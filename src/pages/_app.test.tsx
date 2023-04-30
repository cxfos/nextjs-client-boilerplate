import {render, screen} from '@testing-library/react';
import App from './_app';
import { AppProps } from 'next/app';

describe('App', () => {
    const appProps: AppProps = {
        Component: (props: any) => <><div {...props}></div></>,
        pageProps: { 'data-testid': 'test-component' }
    } as unknown as AppProps;

    it('should render successufully', () => {
        render(App(appProps));

        expect(screen.getByTestId('test-component')).toBeInTheDocument();
      });
});
