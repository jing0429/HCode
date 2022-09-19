import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Still Student !",
    Svg: require("@site/static/img/undraw_graduation_re_gthn.svg").default,
    description: (
      <>
        Although I may look old 😒 , I'm a student studying at{" "}
        <b>National Taiwan University </b>, majoring<i> Computer Science </i>!
      </>
    ),
  },
  {
    title: "Cat Person !",
    Svg: require("@site/static/img/undraw_friends_r511.svg").default,
    description: (
      <>
        <b>I LOVE CAT</b> ! No matter <i>orange , calico or black</i> 🧡.
        However , I am alergic to them 😞.
      </>
    ),
  },
  {
    title: "Maded by Docusaurus",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        This site is build by <a href="https://docusaurus.io" target={"_blank"}> Docusaurus !</a> which is an awesome tool build 
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
