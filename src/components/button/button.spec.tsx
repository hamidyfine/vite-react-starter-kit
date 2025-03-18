import { renderWrapper, screen } from '@/tests';

import { Button } from './button';

describe('Button Component', () => {
    test('renders Button component', () => {
        renderWrapper(<Button>hello</Button>);
        expect(screen.getByText(/hello/i)).toBeInTheDocument();
    });
    test('renders the component with trans hook', () => {
        renderWrapper(<Button>Hello</Button>);
        expect(screen.getByText(/create/i)).toBeInTheDocument();
    });
});
