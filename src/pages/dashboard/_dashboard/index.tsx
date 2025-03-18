import { createFileRoute } from '@/router';

export const Route = createFileRoute('/dashboard/_dashboard/')({
    component: Home,
});

function Home() {
    return (
        <div>
            <p>Hello Dashboard Home inside Layout!</p>
        </div>
    );
}
