import React, { useEffect, useState } from "react";
import "./Todolist.css";
import ListTodo from "../../component/Todolist_Cpn/ListTodo";
import { useSelector, useDispatch } from "react-redux";
import { getTodolistItem } from "../../actions/TodolistActions";
import ModalAddUpdate from "../../component/Modal/ModalAddUpdate";
import Navbar from "../../component/Navbar/Navbar";
import { useHistory } from "react-router";
import { Pagination } from "antd";
import {
  GetTodolistOnHold,
  GetTodolistCompleted,
} from "../../actions/TodolistActions";

export default function Todolist() {
  const [Modal, setModal] = useState(false);

  const closeModal = (status) => {
    setModal(status);
  };
  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;
  const GetTodolist = useSelector((state) => state.GetTodolist);
  const { TodoList } = GetTodolist;
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (userInfo === null || userInfo === undefined) {
      history.push("/Signin");
    }
  }, [userInfo]);
  useEffect(() => {
    dispatch(getTodolistItem());
    return () => {};
  }, []);

  const GetTodolistOnHold = useSelector((state) => state.GetTodolistOnHold);
  const { OnHold } = GetTodolistOnHold;
  const GetTodolistCompleted = useSelector(
    (state) => state.GetTodolistCompleted
  );
  const { Completed } = GetTodolistOnHold;

  const PageRenderOnhold = (page) => {
    dispatch(GetTodolistOnHold(page));
  };
  const PageRenderCompleted = (page) => {
    dispatch(GetTodolistCompleted(page));
  };

  const TodoListOnHold = TodoList
    ? TodoList.filter(
        (Todo) => Todo.status != "Completed" && Todo.status != "Canceled"
      )
    : [];
  const TodoListCompleted = TodoList
    ? TodoList.filter(
        (Todo) => Todo.status != "In Progress" && Todo.status != "Pending"
      )
    : [];

  return (
    <>
      <Navbar />
      <div className="todolist">
        <div className="todolist__title">
          <p>
            You’ve got <span>7 task</span> today{" "}
          </p>
          <button type="button" onClick={() => setModal(true)}>
            <i className="far fa-plus-square"></i> Add New
          </button>
        </div>
        <div className="todolist__onhold">
          <div className="todolist__onHold__title">
            <p>On Hold</p>
          </div>
          {TodoListOnHold.length > 0 ? (
            TodoListOnHold.map((Todoitem) => (
              <ListTodo key={Todoitem.id} Todoitem={Todoitem} />
            ))
          ) : (
            <div class="loader"></div>
          )}
        </div>
        {/* <Pagination
          pageSize={5}
          style={{ marginTop: "20px", textAlign: "center" }}
          Current={1}
          total={TodoListOnHold.length > 0 && TodoListOnHold.length}
          onChange={PageRenderOnhold}
        /> */}

        <div className="todolist__completed">
          <div className="todolist__completed__title">
            <p>Completed</p>
          </div>
          {TodoListCompleted.length > 0 ? (
            TodoListCompleted.map((Todoitem) => (
              <ListTodo key={Todoitem.id} Todoitem={Todoitem} />
            ))
          ) : (
            <div class="loader"></div>
          )}
        </div>

        {/* <Pagination pageSize={5}
                    style={{ marginTop: "20px", marginBottom: "20px", textAlign: "center" }}
                    Current={1}
                    total={TodoListCompleted.length > 0 && TodoListCompleted.length}
                    onChange={PageRenderCompleted}
                /> */}

        {Modal && <ModalAddUpdate modal="Add" closeModal={closeModal} />}
      </div>
    </>
  );
}
