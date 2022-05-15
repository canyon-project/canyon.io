import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Translate, {translate} from '@docusaurus/Translate'
import HomepageFeatures from '../components/HomepageFeatures';
import useBaseUrl from '@docusaurus/useBaseUrl';

function addUTM(urlAddress) {
    const url = new URL(urlAddress);
    url.searchParams.append("utm_source", "pnpm");
    url.searchParams.append("utm_medium", "home_page");

    return url.toString();
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/introduction">
            起飞
          </Link>
        </div>
      </div>
    </header>
  );
}

const Showcase = props => {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;

    const showcase = siteConfig.customFields.users.filter(({ pinned }) => pinned).map((user, i) => {
        return (
            <a href={addUTM(user.infoLink)} target="_blank" key={i} rel="noopener">
                <img src={user.image} alt={user.caption} style={{
                    width: user.width ? `${user.width}px` : '128px',
                    padding: '20px'
                }} />
            </a>
        );
    });

    return (
        <div className="mainContainer" style={{backgroundColor: 'var(--ifm-color-emphasis-100)', padding: '2rem 0'}}>
            <div style={{margin: '0 auto', maxWidth: '1100px', padding: '0 20px'}}>
                <div className="showcaseSection text--center">
                    <div className="prose" style={{marginBottom: '20px'}}>
                        <h1><Translate>Sponsored By</Translate></h1>
                        <div className="logos" style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'center',
                        }}>
                            <a href={addUTM("https://bit.dev/")} target="_blank">
                                <img style={{padding: '20px'}} width="120" alt="bit" src="/img/users/bit.svg" />
                            </a>
                            <a href={addUTM("https://prisma.io/")} target="_blank">
                                <img style={{padding: '20px'}} width="240" alt="Prisma" src="/img/users/prisma.svg" />
                            </a>
                            <a href={addUTM("https://www.leniolabs.com/")} target="_blank">
                                <img style={{padding: '20px'}} width="120" alt="Leniolabs_" src="/img/users/leniolabs.jpg" />
                            </a>
                            <a href={addUTM("https://vercel.com/")} target="_blank">
                                <img style={{padding: '20px'}} width="240" alt="Vercel" src="/img/users/vercel.svg" />
                            </a>
                            <a href={addUTM("https://www.takeshape.io/")} target="_blank">
                                <img style={{padding: '20px'}} width="320" alt="TakeShape" src="/img/users/takeshape.svg" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="prose">
                            <h1><Translate>Who's Using This?</Translate></h1>
                            <p><Translate>This project is used by many folks</Translate></p>
                        </div>
                        <div className="logos" style={{
                            alignItems: 'center',
                            display: 'flex',
                            flexFlow: 'row wrap',
                            justifyContent: 'center',
                        }}>{showcase}</div>
                        <Link
                            style={{margin: '0 20px'}}
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted,
                            )}
                            to={useBaseUrl('users')}><Translate>More pnpm users</Translate></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
          {/*<Showcase></Showcase>*/}
      </main>
    </Layout>
  );
}
