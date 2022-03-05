
const NewTodo: React.FC<{}> = () => {
  return (
    <form>
      <label htmlFor="text">TODO TEXT</label>
      <input type="text" id="text" />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
