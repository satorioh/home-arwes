import type { NextPage } from "next";
import { ArwesThemeProvider, StylesBaseline } from "@arwes/core";
import { AnimatorGeneralProvider } from "@arwes/animation";
import CustomBleepsProvider from "@/components/CustomBleepsProvider";
import CustomCard from "@/components/CustomCard";
import website from "@/config/website";
import styles from "../styles/Home.module.css";

const FONT_FAMILY_ROOT = '"Titillium Web", sans-serif';
const globalStyles = { body: { fontFamily: FONT_FAMILY_ROOT } };
const animatorGeneral = { duration: { enter: 200, exit: 200, stagger: 30 } };

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <video
        className={styles.bgVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/assets/videos/Earth.mp4" type="video/mp4" />
      </video>
      <ArwesThemeProvider>
        <StylesBaseline styles={globalStyles} />
        <CustomBleepsProvider>
          <AnimatorGeneralProvider animator={animatorGeneral}>
            {website.map((item) => (
              <CustomCard
                key={item.url}
                title={item.title}
                btnText={item.btnText}
                url={item.url}
                description={item.description}
              />
            ))}
          </AnimatorGeneralProvider>
        </CustomBleepsProvider>
      </ArwesThemeProvider>
    </div>
  );
};

export default Home;
