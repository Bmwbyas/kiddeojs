import styles from '../styles/Sidebar.module.scss'
import WorkingHours from "./workingHours";
import CustomCalendar from "./customCalendar";
import Region from "./region";
import { FormProvider, useForm } from "react-hook-form";
import { formatDate } from "../utils/helpers/date";
import Filters from "./filters";
import Text from "./Text";
import apiService from "../api/apiService";

const Sidebar = () => {
    const methods = useForm({
        defaultValues: {
            calendar: formatDate(new Date())
        }
    })
    const onSubmit = (data) => {
        apiService.sendForm(data)
        console.log(data)
    }

    return (
        <FormProvider {...methods}>
            <form className={styles.container} onSubmit={methods.handleSubmit(onSubmit)}>
                <Text
                    type={"h1"}
                    text={'Параметры подбора'}
                    cl={styles.title}
                />
                <CustomCalendar/>
                <WorkingHours/>
                <Region/>
                <Filters/>
                <input className={styles.submit} type="submit"/>
            </form>
        </FormProvider>
    );
};

export default Sidebar;
