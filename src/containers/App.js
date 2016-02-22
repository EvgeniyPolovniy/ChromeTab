import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'

// class App extends Component {
//   render() {
//     // Получено благодоря вызову call():
//     const { dispatch, visibleTodos, visibilityFilter } = this.props
//     return (
//       <div>
//         <AddTodo
//           onAddClick={text =>
//             dispatch(addTodo(text))
//           } />
//         <TodoList
//           todos={visibleTodos}
//           onTodoClick={id =>
//             dispatch(completeTodo(id))
//           } />
//         <Footer
//           filter={visibilityFilter}
//           onFilterChange={nextFilter =>
//             dispatch(setVisibilityFilter(nextFilter))
//           } />
//       </div>
//     )
//   }
// }

// App.propTypes = {
//   visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
//   }).isRequired).isRequired,
//   visibilityFilter: PropTypes.oneOf([
//     'SHOW_ALL',
//     'SHOW_COMPLETED',
//     'SHOW_ACTIVE'
//   ]).isRequired
// }

// function selectTodos(todos, filter) {
//   switch (filter) {
//     case VisibilityFilters.SHOW_ALL:
//       return todos
//     case VisibilityFilters.SHOW_COMPLETED:
//       return todos.filter(todo => todo.completed)
//     case VisibilityFilters.SHOW_ACTIVE:
//       return todos.filter(todo => !todo.completed)
//   }
// }

// // Какие именно props, полученные из глобального состояния, мы хотим внедрить?
// // Обратите внимание: используйте https://github.com/faassen/reselect для лучшей производительности.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }

// // Оборачиваем компонент для внедрения в него функции dispatch и состояния
// export default connect(select)(App)


class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="temp"></div>
        <div className="left-bar">
          <h1 className="time"></h1>
          <div className="currency-block-wrapper">
            <span className="currency-block uah loading">
              <span className="left-currency">
                <span>1</span>
                <i className="fa fa-usd"></i>
                <span>=&nbsp;</span>
              </span>
              <span className="currency-wrap">
                <div className="ball-triangle-path"><div></div><div></div><div></div></div>
                <span className="currency"></span>
                <span>&#8372;</span>
              </span>
            </span>
            <span className="currency-block btc loading">
              <span className="left-currency">
                <span>1</span>
                <i className="fa fa-btc"></i>
                <span>=&nbsp;</span>
              </span>
              <span className="currency-wrap">
                <div className="ball-triangle-path"><div></div><div></div><div></div></div>
                <span className="currency"></span>
                <i className="fa fa-usd"></i>
              </span>
            </span>
            <span className="currency-block eth eth-dol loading">
              <span className="left-currency">
                <span>1</span>
                <span>&Xi;</span>
                <span>=&nbsp;</span>
              </span>
              <span className="currency-wrap">
                <div className="ball-triangle-path"><div></div><div></div><div></div></div>
                <span className="currency"></span>
                <i className="fa fa-usd"></i>
              </span>
            </span>
            <span className="currency-block eth eth-btc loading">
              <span className="left-currency">
                <span>1</span>
                <span>&Xi;</span>
                <span>=&nbsp;</span>
              </span>
              <span className="currency-wrap">
                <div className="ball-triangle-path"><div></div><div></div><div></div></div>
                <span className="currency"></span>
                <i className="fa fa-btc"></i>
              </span>
            </span>
          </div>
        </div>

        <div className="right-bar">
          <span className="first"></span>
          <span className="second"></span>
        </div>

      </div>
    )
  }
}

export default App