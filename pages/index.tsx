import Head from "next/head";
import Image from "next/image";
import { Inter, Montserrat } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Nav from "@/components/nav";
import { CiMail } from "react-icons/ci";
import { FaPlay } from "react-icons/fa";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const mono = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pixs AI</title>
        <meta name="description" content="Pixs AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${mono.className}`}>
        <Nav />
        <div className={styles.home}>
          <h2>
            Enhance Road Safety with <span>AI-Driven</span> Monitoring
          </h2>
          <p>Real-time detection and alerts for dangerous driving behaviors</p>
          <div>
            <button>Request a Demo</button>
            <p>
              <FaPlay />
              Watch Now
            </p>
          </div>
        </div>

        <div className={styles.key}>
          <h2>
            <span> Key </span>Features
          </h2>
          <div className={styles.keyOpt}>
            <div className={`${styles.optKey} ${styles.opF}`}>
              <div className={styles.keyImg}>
                <img src="/puzzle 1.png" alt="" />
              </div>
              <h3>Comprehensive Reporting</h3>
              <p>
                Generate detailed reports that provide a deep dive into driving
                behaviors and traffic incidents. Our comprehensive reporting
                tools offer insights into patterns and trends, helping you
                identify high-risk areas and behaviors.
              </p>
            </div>
            <div className={`${styles.optKey} ${styles.opS}`}>
              <div className={styles.keyImg}>
                <img src="/surveillance 1.png" alt="" />
              </div>
              <h3>Real-Time Monitoring</h3>
              <p>
                Instantly detect and alert dangerous driving patterns with our
                advanced real-time monitoring system. Our AI-enabled cameras
                continuously scan and analyze traffic, identifying behaviors
                such as speeding, sudden lane changes, and erratic driving.
              </p>
            </div>
            <div className={`${styles.optKey} ${styles.opT}`}>
              <div className={styles.keyImg}>
                <img src="/data-report 1.png" alt="" />
              </div>
              <h3>Easy Integration</h3>
              <p>
                Integrate seamlessly with existing traffic systems and
                infrastructure without disruption. Our solution is designed to
                work with a variety of hardware and software platforms, ensuring
                a smooth implementation process.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.how}>
          <h2>
            How it <span>Works</span>
          </h2>

          <div className={styles.howOpt}>
            <div className={`${styles.optHow} ${styles.howF}`}>
              <div className={styles.howTi}>
                <h3> Install AI Cameras</h3>
                <div className={styles.howImg}>
                  <img src="/security-camera 1.png" alt="" />
                </div>
              </div>
              <p>
                Deploy AI-enabled cameras at strategic locations across your
                traffic network. These high-definition cameras are equipped with
                advanced sensors and processing capabilities to capture and
                analyze real-time traffic data.
              </p>
            </div>
            <div className={`${styles.optHow} ${styles.howS}`}>
              <div className={styles.howTi}>
                <h3> Install AI Cameras</h3>
                <div className={styles.howImg}>
                  <img src="/security-camera 1.png" alt="" />
                </div>
              </div>
              <p>
                Deploy AI-enabled cameras at strategic locations across your
                traffic network. These high-definition cameras are equipped with
                advanced sensors and processing capabilities to capture and
                analyze real-time traffic data.
              </p>
            </div>
            <div className={`${styles.optHow} ${styles.howT}`}>
              <div className={styles.howTi}>
                <h3> Install AI Cameras</h3>
                <div className={styles.howImg}>
                  <img src="/security-camera 1.png" alt="" />
                </div>
              </div>
              <p>
                Deploy AI-enabled cameras at strategic locations across your
                traffic network. These high-definition cameras are equipped with
                advanced sensors and processing capabilities to capture and
                analyze real-time traffic data.
              </p>
            </div>
            <div className={`${styles.optHow} ${styles.howFO}`}>
              <div className={styles.howTi}>
                <h3> Install AI Cameras</h3>
                <div className={styles.howImg}>
                  <img src="/security-camera 1.png" alt="" />
                </div>
              </div>
              <p>
                Deploy AI-enabled cameras at strategic locations across your
                traffic network. These high-definition cameras are equipped with
                advanced sensors and processing capabilities to capture and
                analyze real-time traffic data.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.contact}>
          <div className={styles.conMain}>
            <div className={styles.conTil}>
              <div className={styles.conFir}>
                <h2>Contact</h2>
                <p>
                  <div className={styles.line}></div>
                  Us
                </p>
              </div>
              <p>
                We&apos;re here to help! Have questions or want to see our AI
                traffic monitoring in action? Fill out the form, and we&apos;ll
                get back to you promptly
              </p>
              <span>
                <CiMail />
                connect@peks.ai
              </span>
            </div>

            <div className={styles.conForm}>
              <div className={styles.conFomm}>
                <div className={styles.inpput}>
                  <label htmlFor="">Name</label>
                  <input type="text" placeholder="Your full name" />
                </div>
                <div className={styles.inpput}>
                  <label htmlFor="">Email</label>
                  <input type="text" placeholder="me@company.com" />
                </div>
                <div className={styles.inpput}>
                  <label htmlFor="">Subject</label>
                  <input type="text" placeholder="Enter Subject" />
                </div>
                <div className={styles.inpput}>
                  <label htmlFor="">Comment</label>
                  <textarea name="" id="" placeholder="Comment"></textarea>
                </div>
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
