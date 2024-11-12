import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Workshop Introduction',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This workshop is designed to provide a comprehensive introduction to the
        technical content found in the <code>docs</code> folder.
      </>
    ),
  },
  {
    title: 'Technical Content',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        The <code>docs</code> folder contains a variety of technical materials
        covering different aspects of development and usage of Docusaurus.
      </>
    ),
  },
  {
    title: 'Practical Examples',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Inside the <code>docs</code> folder, you will find practical examples
        that help illustrate how to apply the concepts discussed in the
        workshop.
      </>
    ),
  },
  {
    title: 'Join the Journey',
    Svg: require('@site/static/img/undraw_docusaurus_roadmap.svg').default,
    description: (
      <>
        Follow along with this workshop to enhance your skills and knowledge.
        Dive into the technical content and practical examples to get the most
        out of this learning experience.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} role='img' />
      </div>
      <div className='text--center padding-horiz--md'>
        <Heading as='h3'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
