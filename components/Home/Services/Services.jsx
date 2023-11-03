
import styles from "./Services.module.css";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className={styles.services_section} id="services">
        <div className={styles.services_container}>
          <div className={styles.services_row}>
              <div className={styles.services_col_left}>
                <div className={styles.services_section_head}>
                  <div className={styles.services_top_title}>
                  <img src="/assets/line_l.png" alt=""></img>
                    <h5>Services</h5>
                  </div>
                  <h2>Unlock Your Company's Potential with Our Unrivaled <span>Staffing Services</span></h2>
                </div>
                <div className={styles.services_section_content}>
                  <p>Elevate your workforce and supercharge your business with Skill Garage – your gateway to unparalleled staffing solutions!</p>
                  <p>When it comes to staffing services, there's no room for compromise. Join the ranks of satisfied clients who trust Skill Garage for their staffing needs. Experience the difference today!</p>
                </div>
                <div className={styles.services_col_left_btn}>
                  <Link href="/staffing">Read More</Link>
                </div>
              </div>
              <div className={styles.services_col_right}>
                <img src="/assets/staffing-home.jpg" alt="" />
              </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
