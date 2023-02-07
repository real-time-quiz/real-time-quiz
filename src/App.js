
import './App.css';

function App() {
  let questions = [
    {
      statement: "What is the name of capital of Pakistan?",
      options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
      ans: "Islamabad"
    },
    {
      statement: "What is the name of capital of India?",
      options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
      ans: "Islamabad"
    },
    {
      statement: "What is the name of capital of China?",
      options: ["Lahore", "Karachi", "Islamabad", "Peshawar"],
      ans: "Islamabad"
    }
  ]

  return (
    <div className="container my-5">
      <h1 style={{textAlign: "center"}}> Welcome to My Online Quiz Website</h1>
      <ol>
        {
          questions.map(q => {
            return(
              <div>
              <li className="bg-secondary">{q.statement}</li>
              <ul>
                {
                  q.options.map(op => <li className="text-primary">{op}</li>)
                }
              </ul>
              </div>
            )
          })
        }
      </ol>
    </div>
  );
}

export default App;



/*
style='text-align: center;'
style={{textAlign: "center"}}


style="background-color: red"
style={{backgroundColor: "red"}}


*/