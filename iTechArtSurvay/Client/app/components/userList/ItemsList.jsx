var React = require('react');
var SearchPlugin = require('./SearchPlugin');
 
class ItemsList extends React.Component {
    constructor(props){
        super(props);
        this.state = { users: this.props.data.users};
        this.filterList = this.filterList.bind(this);
    }
              
    filterList(text){
        var filteredList = this.props.data.users.filter(function(user){
            return user.name.toLowerCase().search(text.toLowerCase())!== -1;
        });
        this.setState({users: filteredList});
    }
               
    render() {
        return(
            <div>        
                <h2>{this.props.data.title}</h2>
                <SearchPlugin filter={this.filterList} />
                <table>
                  <tr className="fixed-row table-row">
                    <td className="first-column">Имя</td>
                    <td className="column">Роль</td>
                    <td className="column">Зарегистрирован</td>
                    <td className="column">Опросов</td>
                    <td className="last-column">Действия</td>
                  </tr>{
                        this.state.users.map(function(user){
                            return <tr key={user.id} className="table-row">
                              <td className="first-column">{user.name}</td>
                              <td className="column">{user.role}</td>
                              <td className="column">{user.signUpDate}</td>
                              <td className="column">{user.surveys}</td>
                              <td className="last-column"></td>
                            </tr>
                        })
                    }
                  <tr className="fixed-row table-row">
                    <td className="first-column">Всего пользователей: {this.state.users.length}</td>
                    <td className="column"></td>
                    <td className="column"></td>
                    <td className="column"></td>
                    <td className="last-column">
                      <i className="first-page-icon"></i>
                      <i className="prev-page-icon"></i>
                      <i className="next-page-icon"></i>
                      <i className="last-page-icon"></i>
                    </td>
                  </tr>
                </table>
            </div>);
    }
}
 
module.exports = ItemsList;
