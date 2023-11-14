import Accordion from "../accordion";
import styles from '../../styles/Filters.module.scss'
import {additionally, filterData} from "./data";


const Filters = () => {

    return (
        <div className={styles.filters}>
            <Accordion title={'Популярные фильтры'} titleStyle={"h1"}>
                {filterData
                    .map((f, key) =>
                        <Accordion key={key} title={f.title}>{f.content}</Accordion>)}
            </Accordion>
            <Accordion title={'Дополнительно'} titleStyle={"h1"}>
                {additionally
                    .map((f, key) =>
                        <Accordion key={key} title={f.title}>{f.content}</Accordion>)}
            </Accordion>
        </div>
    );
};

export default Filters;
