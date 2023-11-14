import styles from '../../styles/Checkbox.module.scss'
import {useFormContext} from "react-hook-form";
import React from "react";


const GroupCheckbox  = ({nameField, data, type, isRating = false}) => {
    
    const {register} = useFormContext()
    
    return (
        <div className={styles.container}>
            {data.map((item, key) => {
                return <div key={key} className={styles.checkbox__container}>
                    <input className={styles.checkbox__container} {...register(nameField)}
                           value={isRating ? item.value : item.content} id={nameField + key} type={type}/>
                    <label htmlFor={nameField + key}>{item.content}</label>
                </div>
            })}

        </div>
    );
};

export default GroupCheckbox;
