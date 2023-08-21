import formatTodoForAI from "./formatTodoForAI";

const fetchSuggestion = async (board: Board) => {
  const todos = formatTodoForAI(board);
  console.log("Formated Todos to sent", todos);

  const res = await fetch("/api/generateSummary", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ todos }),
  });
  const GPTData = await res.json();
  const { content } = GPTData;
  return content;
};

export default fetchSuggestion;
