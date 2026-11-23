import { useState } from "react"


function TodoList() {
    const [teks, setTeks] = useState("");
    const [todos, setTodos] = useState([]);

    function tambah(){
        if (teks === "") return;
        setTodos([...todos, teks]);
        setTeks("");
    }

    function hapus(index){
        const baru = todos.filter((item, i) => i != index);
        setTodos(baru);
    }

    return(
        <div>
            <h2>To-Do List</h2>
            <input value={teks} onChange={(e) => setTeks(e.target.value)} placeholder="Tulis Tugas" />

            <button onClick={tambah}>Tambah</button>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item} <button onClick={() => hapus(index)}>Hapus</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList