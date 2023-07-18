import { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [textArea, setTextArea] = useState("");
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);
  const [comments, setComments] = useState([]);

  function addComments() {
    if (textArea !== "") {
      setComments([...comments, { textArea, isItalic, isBold, id: uuidv4() }]);
      setTextArea("");
      setIsItalic(false);
      setIsBold(false);
    }
  }

  function removeComment(id) {
    const updatedComments = comments.filter((item) => item.id !== id);
    setComments(updatedComments);
  }
  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Welcome to comments</h1>
      <textarea
        value={textArea}
        onChange={(e) => setTextArea(e.target.value)}
        className={`${isItalic ? "italiana" : ""} ${isBold ? "boldona" : ""}`}
      ></textarea>

      <div className="buttons">
        <button
          style={{ fontStyle: "italic" }}
          onClick={() => setIsItalic(!isItalic)}
        >
          italic
        </button>
        <button
          style={{ fontWeight: "bold" }}
          onClick={() => setIsBold(!isBold)}
        >
          bold
        </button>
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setTextArea("")}
        >
          clear
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => addComments()}
        >
          post
        </button>
      </div>
      <div className="comments_container">
        {comments.map((item) => {
          return (
            <div key={item.id} className="comment">
              <p
                className={`${item.isItalic ? "italiana" : ""} ${
                  item.isBold ? "boldona" : ""
                }`}
              >
                {item.textArea}
              </p>
              <i
                onClick={() => removeComment(item.id)}
                className="fa fa-close"
              ></i>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
