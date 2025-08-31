import styles from "@/styles/Home.module.css";
import AuthWrapper from "./AuthWrapper";
import MainPrompt from "../components/MainPrompt/MainPrompt";
import SubButton from "../components/subbutton/sub"; // 👈 import

const Home = () => {
  return (
    <AuthWrapper>
      <div className={styles.main}>
        <MainPrompt />
        {/* Floating Subscribe button */}
        <SubButton />
      </div>
    </AuthWrapper>
  );
};

export default Home;
