import { useThemeContext } from "../../common/ThemeContext"
import checkMarkLight from "../../assets/check-light.svg"
import checkMarkDark from "../../assets/check-dark.svg"
import SkillList from "../../common/SkillList"; // Update the import
import styles from './SkillsStyles.module.css';


function Skill(){
    const {theme} = useThemeContext();
    const checkMarkIcon =theme === 'light'? checkMarkLight : checkMarkDark;

return (
    <section id="skills" className="Name={styles.container}">
        <h1 className={styles.sk}>Skills</h1>
        <div className={styles.skillLis}>

            <SkillList src={checkMarkIcon} skill="HTML5" />
            <SkillList src={checkMarkIcon} skill="CSS3" />
            <SkillList src={checkMarkIcon} skill="Javascript"/>
            </div>
            <div className={styles.skillLis}>
            <SkillList src={checkMarkIcon} skill="Typescript"/>
            <SkillList src={checkMarkIcon} skill="GitHub"/>
            </div>
            <hr/>
            <div className={styles.skillLis}>
                <SkillList src={checkMarkIcon} skill="React"/>
                <SkillList src={checkMarkIcon} skill="Redux"/>
                </div>                    <div className={styles.skillLis}>

                <SkillList src={checkMarkIcon} skill="Node.js"/>
                <SkillList src={checkMarkIcon} skill="Angular.js"/>
                </div>
                <hr/>
                <p className={styles.para}><b>Skills in progress to be achieved.</b></p>
                <hr className={styles.hrrr}/>
                <hr className={styles.hrr}/>                
                <div className={styles.skillLis}>
                    <SkillList src={checkMarkIcon} skill="Django"/>
                    <SkillList src={checkMarkIcon} skill="Flask"/>
                    <SkillList src={checkMarkIcon} skill="SQL"/>
                    </div>
                    <div className={styles.skillLis}>

                    <SkillList src={checkMarkIcon} skill="Redux"/>
                    <SkillList src={checkMarkIcon} skill="Bootstrap"/>
                    </div>
                    <hr/>
        </section>
);
}
export default Skill;