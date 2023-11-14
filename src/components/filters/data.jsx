import Rating from "../rating";
import Range from "../range";
import GroupCheckbox from "../checkboxGroup";

const count_peoples__contains = [
    {
        "content": "До 20 человек",
        "state": false
    },
    {
        "content": "От 20 до 50",
        "state": false
    },
    {
        "content": "Больше 50",
        "state": false
    }
]
const zoning__contains = [
    {
        "content": "Место для игр",
        "state": false
    },
    {
        "content": "Место для переодевания",
        "state": false
    },
    {
        "content": "Место для красивых фото",
        "state": false
    },
    {
        "content": "Тихий уголок для взрослых",
        "state": false
    }
]
const conditions__contains = [
    {
        "content": "Закрывается под нас",
        "state": false
    },
    {
        "content": "Отдельный вход",
        "state": false
    },
    {
        "content": "Можно со своей едой",
        "state": false
    },
    {
        "content": "Можно со своим фотографом/аниматором",
        "state": false
    },
    {
        "content": "Можно украсить самим",
        "state": false
    },
    {
        "content": "Уборка после включена",
        "state": false
    }
]
const rating = [
    {content: <Rating countStar={3}/>, value: 3},
    {content: <Rating countStar={4}/>, value: 4},
    {content: <Rating countStar={5} viewText={false}/>, value: 5},
]
export const filterData = [
    {
        title: 'Цена 1 часа аренды',
        content: <Range
            min={1800}
            max={3800}
            step={5}
            defaultValue={3000}
            name={'price1hour'}/>
    },
    {
        title: 'Вместимость',
        content: <GroupCheckbox
            nameField={'count_peoples__contains'}
            type={'radio'}
            data={count_peoples__contains}/>
    },
    {
        title: 'Площадь (кв.м)',
        content: <Range
            min={30} max={225}
            step={5} defaultValue={123}
            name={'square__lte'}/>
    },
    {
        title: 'Рейтинг по отзывам',
        content: <GroupCheckbox
            nameField={'rating'}
            type={'checkbox'}
            data={rating}
            isRating={true}
        />
    },
]

export const additionally = [
    {
        title: 'Зонирование',
        content: <GroupCheckbox
            nameField={'zoning__contains'}
            type={'checkbox'} data={zoning__contains}/>
    },
    {title: 'Что еще есть', content: 'тут ничего нет'},
    {
        title: 'Условия',
        content: <GroupCheckbox
            nameField={'conditions__contains'}
            type={'checkbox'} data={conditions__contains}/>
    },
]
