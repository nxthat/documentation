import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './style.module.css';

const FeatureList = [
  {
    title: 'Guides',
    url: '/docs/guides',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Learn how to use our products and tools such as Nanocl.
      </>
    ),
  },
  {
    title: 'Download and Install',
    url: '/docs/setups',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
         Download and install Next Hat tools like Nanocl in a few easy steps.
      </>
    ),
  },
  {
    title: 'References',
    url: '/docs/references',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Browse through reference documentation.
      </>
    ),
  },
  {
    title: 'Get started with Nanocl',
    url: '/docs/guides/nanocl/get-started',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Learn Nanocl basics and the benefits of hybrid cloud.
      </>
    ),
  },
];

function Feature({Svg, title, url, description}) {
  return (
    <div className={styles.body_card_holder}>
      <Link to={url} className={styles.body_card}>
        <i className="fas fa-circle-info body-icon"></i>
        <h5 className={styles.body_card_title}>{title}</h5>
        <p className={styles.body_card_description}>
          {description}
        </p>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className='container'>
      <div className={clsx(styles.body_cards)}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
      </div>
    </section>
  );
}
