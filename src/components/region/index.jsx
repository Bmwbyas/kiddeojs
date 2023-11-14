import Text from "../Text";
import styles from '../../styles/Region.module.scss'
import Select from "../select";
import {options} from "./data";


const Region = () => {
    return (
        <div>
            <Text cl={styles.title} type={"h2"} text={'Район'}/>
            <div>
                <Select
                    options={options}
                    name={'region'}
                    type={"checkbox"}
                    placeholder={'Любой'}
                />
            </div>
        </div>
    );
};

export default Region;
