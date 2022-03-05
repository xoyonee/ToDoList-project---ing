// todo가 어떻게 생겼는지 묘사

class Todo {
    id: string;
    text: string;

    constructor(todoText: string) { //this는 Todo이다
        this.text = todoText;
        this.id = new Date().toISOString();
    }
}

export default Todo;