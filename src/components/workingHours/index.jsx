import styles from '../../styles/WorkingHours.module.scss'
import Select from "../select";
import Text from "../Text";
import {options} from "./data";


const WorkingHours = () => {

    return (
        <div className={styles.container}>
            <div>
                <Text cl={styles.title} type={"h2"} text={'Начнем в'}/>
                <Select
                    options={options}
                    name={'start'}
                    type={"radio"}
                    defaultValue={'10:00'}
                />
            </div>
            <div>
                <Text cl={styles.title}  type={"h2"} text={'Закончим в'}/>
                <Select
                    options={options}
                    name={'end'}
                    type={"radio"}
                    defaultValue={'12:00'}
                />

            </div>
        </div>
    );
};

export default WorkingHours;
