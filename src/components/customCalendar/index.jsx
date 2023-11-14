import React, {useState} from "react";
import {Calendar} from "./Calendar";
import Text from "../Text";
import styles from '../../styles/Calendar.module.scss'
import {useFormContext} from "react-hook-form";

const CustomCalendar = () => {
    const [selectedDate, setSelectedDay] = React.useState(new Date());
    const [isView, setIsView] = useState(false)
    const onClose = () => setIsView(false)
    const { setValue  } = useFormContext()

    return (<div className={styles.container}>
        <Text cl={styles.title} type={"h2"} text={'Дата и время праздника'}/>

        <input
            className={styles.input}
            readOnly
            value={selectedDate.toLocaleDateString().split('.').join('/')}
            onClick={() => {
                setIsView(true)
            }}
        />
        {
            isView &&
					<Calendar onClose={onClose}
                              selectedDate={selectedDate}
                              selectDate={(date) => {
                                  setValue("calendar", date.toLocaleDateString().split('.').join('/'))
                                  setSelectedDay(date)
                              }}
                    />
        }
    </div>);
};

export default CustomCalendar;
