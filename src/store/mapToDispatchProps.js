import { bindActionCreators } from 'redux';
import { addItem, deleteItem,completeTodo,clearCompleted,} from './reducers/listReducer';
import {setVisibilityFilter} from "./reducers/filterReducer";
import {getItems, postItems} from "./actionCreators/actionCreators"
import {deleteItems, setComplete,_clearCompleted} from './actionCreators/actionCreators';

export default function mapToDispatchProps(component) {
    switch (component){
        case "ToDoHeader":
            return function (dispatch){
                return {
                    addItem: bindActionCreators(addItem, dispatch),
                    addNew : postItems
                }
            }
        case "ToDoListItem":
            return function (dispatch){
                return{
                    _deleteItems: deleteItems,
                    completeTodo: setComplete,

                }
            }
        case "ToDoList" :
            return function (dispatch){
                return {
                     setFilter : bindActionCreators(setVisibilityFilter,dispatch),
                     // getItems: getItems()
                }
            }
        case "ToDoFilters" :
            return function (dispatch){
                return{

                    clear: _clearCompleted

                }
            }
        case 'FilterLink':
            return function (dispatch){
                return{
                     setFilter : bindActionCreators(setVisibilityFilter,dispatch),
                }
            }
    }

}