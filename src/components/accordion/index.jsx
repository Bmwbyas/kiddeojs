import styles from '../../styles/Accordion.module.scss'
import { useState } from "react";
import Text from "../Text";


const Accordion = ({children, title, titleStyle = 'h2'}) => {
    const [isView, setIsView] = useState(false)

    return (
        <div className={styles.accordion}>
            <div
                className={isView ? `${styles.tab__title} ${styles.active}` : styles.tab__title}
                onClick={() => setIsView(!isView)}
            >
                <Text type={titleStyle} text={title}/>
            </div>
            {isView && <div className={styles.tab__content}>{children}</div>
            }
        </div>
    );
};

export default Accordion;
