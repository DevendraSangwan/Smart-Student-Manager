function TaskInput({ input, setInput, addTask }) {
  return (
    <div className="task-box">
      <h3>Task Input (Event Handling)</h3>
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter a new daily task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>
          Add Task (+)
        </button>
      </div>
      {/* LIVE PREVIEW */}
      <p className="preview">
  Live Input Preview:
  {input ? ` ${input}` : " [What the user is typing...]"}
</p>
    </div>
  );
}

export default TaskInput;