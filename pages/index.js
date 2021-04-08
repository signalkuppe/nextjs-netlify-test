import styled from 'styled-components';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import BaseLayout from '../components/layout/Base';
import Head from '../components/layout/Head';

function Homepage() {
    const { t } = useTranslation('homepage');
    return (
        <BaseLayout head={<Head title="Homepage title" />}>
            <h1>{t('Hello world')}</h1>
            <button onClick={() => alert('you clicked me')}>click me</button>
        </BaseLayout>
    );
}

export default Homepage;
