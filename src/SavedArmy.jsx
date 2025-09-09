import { useParams } from "react-router-dom";

export default function SavedArmy() {
    const { listIndex } = useParams();
    const savedLists = JSON.parse(localStorage.getItem("savedLists") || "[]");
    const list = savedLists[listIndex];

    if (!list) return <p>List not found!</p>;

    return (
        <div style={{ padding: "2rem" }}>
            <h1>{list.system} - {list.name}</h1>
            <pre>{JSON.stringify(list.army, null, 2)}</pre>
        </div>
    );
}
