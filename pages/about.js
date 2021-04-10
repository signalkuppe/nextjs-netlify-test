import BaseLayout from '../components/layout/Base';
import Head from '../components/layout/Head';

export default function About() {
    return (
        <BaseLayout head={<Head title="About title" />}>
            <h1>About us</h1>
        </BaseLayout>
    );
}
