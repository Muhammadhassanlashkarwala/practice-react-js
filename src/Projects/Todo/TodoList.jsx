import { MdDelete } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const TodoList = ({ data, key, onHandleDeleteTodo, onHandleCheckedTodo, checked }) => {
    return(
        <li className="list py-2 px-4" key={key}>
        <span className={checked ? "checkList" : "notcheckList"}>
            {data}
        </span>
        <button className="check-btn py-2 pl-4" onClick={() => onHandleCheckedTodo(data)}>
        <IoMdCheckmarkCircleOutline color="green" />
        </button>
        <button className="delete-btn py-2" onClick={() => onHandleDeleteTodo(data)}>
        <MdDelete color="red" />
        </button>
    </li>
    );
};