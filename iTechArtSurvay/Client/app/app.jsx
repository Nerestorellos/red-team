var ReactDOM = require('react-dom');
var React = require('react');
var ItemsList = require('./components/userList/ItemsList');
import './components/userList/css/style.css';
const propsValues = {
    title: "Пользователи",
    users: [
        {id: 1, name: "Админ", role: "Администратор", signUpDate: "1.1.2017", surveys: 10 },
        {id: 2, name: "Вася Пупкин", role: "Пользователь", signUpDate: "10.12.2016", surveys: 5 },
        {id: 3, name: "Юзер 1", role: "Пользователь", signUpDate: "1.1.2017", surveys: 0 },
        {id: 4, name: "Юзер 2", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
        {id: 5, name: "Юзер 3", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
        {id: 6, name: "Юзер 4", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
        {id: 7, name: "Юзер 5", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
        {id: 8, name: "Юзер 6", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
        {id: 9, name: "Юзер 7", role: "Пользователь", signUpDate: "1.1.2017", surveys: 10 },
    ]
};
console.log(propsValues.users);

ReactDOM.render(
    <ItemsList data={propsValues} />,
    document.getElementById("container")
)
