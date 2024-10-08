import { useEffect, useState } from "react";
import List from "../../components/List/List";
import { API_URL } from "../../constants";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonClear from "../../components/Button/Button";
import { addTodo, setIsLoaded } from "../../modules/actions/todos";
import { connect } from "react-redux";

const clear = "clear field";
const cancel = "cancel";

const TodoList = ({ addTodo, isLoaded, setIsLoaded }) => {
  const [name, setName] = useState("");

  const [editId, setEditId] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!isLoaded) {
      getTodos();
    }
  }, [isLoaded]);

  const getTodos = async () => {
    try {
      const response = await fetch(`${API_URL}/todos`);

      const data = await response.json();
      addTodo(data);
      setIsLoaded(true);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const handleAddTodo = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, // name: name,
          isDone: false,
        }),
      });

      setName("");
      setIsLoaded(false);
      setShow(false);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "DELETE",
      });
      setIsLoaded(false);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const editTodo = async (event) => {
    event.preventDefault();

    try {
      await fetch(`${API_URL}/todos/${editId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name, // name: name,
          isDone: false,
        }),
      });

      setName("");
      setIsLoaded(false);
      setEditId(null);
      setShow(false);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  const handleEdit = (name, id) => {
    setName(name);
    setEditId(id);
    setShow(true);
  };



  const handleClear = () => {
    setName(""); // Очищаем поле name
    // setEditId("");
  };

  const handleCancel = () => {
    setName("");
    setEditId("");
    setEditId(null);
    setShow(false);
  };



  const setIsDone = async (id, isDone) => {
    try {
      await fetch(`${API_URL}/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isDone: !isDone,
        }),
      });

      setIsLoaded(false);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div>
      Todo List
      <List
        deleteItem={deleteTodo}
        editItem={handleEdit}
        setIsDone={setIsDone}
      />
      <Button variant="primary" onClick={() => setShow(true)}>
        Add/Edit
      </Button>
      <Modal show={show}
        onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title> Add/Edit TODO </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form handleSubmit={editId ? editTodo : handleAddTodo}>
            <label>
              name:
              <Input value={name} handleChange={setName} />
            </label>
          </Form>
        </Modal.Body>
        <Modal.Footer><ButtonClear variant="warning" text={clear} onClear={handleClear} /> <ButtonClear text={cancel} variant="danger" onClear={handleCancel} /> </Modal.Footer>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoaded: state.todos.isLoaded,
})

export default connect(mapStateToProps, { addTodo, setIsLoaded } )(TodoList);
