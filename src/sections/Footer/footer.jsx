import styles from './footerStyles.module.css';

function Footer() {
  return (
    <section className={styles.container}>
      <p>
        &copy; 2024 Gaurav.  <br/>
        &clubs; Student and developer. &clubs;
      </p>
    </section>
  );
}

export default Footer;
