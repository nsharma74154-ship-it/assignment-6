import React,{ useState} from "react";

function FeedbackForm() {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [feedback, setFeedback] = useState("");

    const handler = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Cousre:", course);
        console.log("Feedback:", feedback);

    }
    return(
      <form
          onSubmit={handler}
      >

        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)} 
        />

        <input
          type="text"
          placeholder="Enter your course"
          onChange={(e) => setCourse(e.target.value)} 
        />

        <input
          type="text"
          placeholder="Enter your feedback"
          onChange={(e) => setFeedback(e.target.value)} 
        />
        <button > Submit </button>

      </form>



        

    );
}

export default FeedbackForm;