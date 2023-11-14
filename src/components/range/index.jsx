import styles from '../../styles/Range.module.scss'
import { useFormContext } from "react-hook-form";

const Range  = (props) => {

    const {name, min, max, ...restProps} = props

    const {register} = useFormContext()

    return (
        <div className={styles.div}>
            <input type="range" {...register(name)} {...restProps} min={min} max={max} />
            <div className={styles.min__max__container}>
                <div>{min}</div>
                <div>{max}</div>
            </div>
        </div>
    );
};

export default Range;
