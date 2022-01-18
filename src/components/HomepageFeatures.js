import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '多端',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          🌈 支持多端，H5、RN。
      </>
    ),
  },
  {
    title: '多版本',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          ⚙️ 支持多版本覆盖率收集。
      </>
    ),
  },
  {
    title: '实时',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          ⏰ 实时生成代码覆盖率报告。
      </>
    ),
  },
    {
        title: '源码回溯',
        Svg: require('../../static/img/undraw_docusaurus_map.svg').default,
        description: (
            <>
                🐎 根据sourceMap回溯源码覆盖率信息。
            </>
        ),
    },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
