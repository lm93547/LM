import Layout from "../src/components/Layout";
import AboutText from "../src/components/about/AboutText";
import AboutWrapper from "../src/components/about/AboutWrapper";

export default function About() {
  return (
    <Layout>
        <AboutWrapper aboutHeader="/assets/backgrounds/about-header.jpg" avatar="/assets/avatar/avatar-2.jpg" >
            <AboutText />
        </AboutWrapper>
    </Layout>
  );
}
