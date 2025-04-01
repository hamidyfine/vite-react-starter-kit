import { renderWrapper, screen } from '@/tests';

describe('QueryProvider Component', () => {
    it('should render children', async () => {
        renderWrapper(
            <div>Children of Theme Provider</div>,
        );

        expect(screen.getByText('Children of Theme Provider')).toBeInTheDocument();
    });
});
