import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header
      className={clsx('hero hero--primary', styles.heroBanner)}
      style={{
        minHeight: '65vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.3rem', marginTop: '1rem' }}>
          Autovía A-11: Tramo Langa de Duero – Aranda de Duero (22,3 km)
        </p>
        <p style={{ fontSize: '1rem', marginTop: '2rem', color: '#eef' }}>
  Sistema digital de gestión de la calidad de la obra. Acceda aquí a la documentación técnica, registros de inspección, ensayos y fichas de verificación.
</p>

      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Plan de Inspección y Ensayos - Autovía A-11 - ASCH"
    >
      <HomepageHeader />
    </Layout>
  );
}
