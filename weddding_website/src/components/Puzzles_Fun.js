import React, {useState} from 'react'
import Navbar from './Navbar'
import ConstructionImage from "../Assets/under_construction.jpg"

const QuizForm = () => {
  // Initial state for storing answers (optional, if you want to capture them later)
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  // Handle input changes (this can be used later if you decide to store answers)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  return (
      <div className='App'>
        <div className='puzles-games-container'>
        <Navbar/>
          <div className = 'puzzles-games-form-container'>
            <h2 className='primary-heading'>Quiz!</h2>
            <form className='puzzles-games-forms'>
              {/* Question 1 - Short answer */}
              <div className = 'puzzles-games-question'>
                <label htmlFor="question1">1. What is a movie Lindsay and John like a lot? It's also one of their cat's names.  </label>
                <input
                  type="text"
                  id="question1"
                  name="question1"
                  value={answers.question1}
                  onChange={handleChange} // This isn't necessary yet but can be used later
                  placeholder="Enter your answer"
                />
              </div>

              {/* Question 2 - Multiple choice */}
              <div className = 'puzzles-games-question'>
                <label>2. What is something Lindsay loves?</label>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="People who are selfish"
                    name="question2"
                    value="People who are selfish"
                    onChange={handleChange}
                  />
                  <label htmlFor="python">  People who are selfish</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="Cold Weather"
                    name="question2"
                    value="Cold Weather"
                    onChange={handleChange}
                  />
                  <label htmlFor="Cold Weather">  Cold Weather</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="Blankets and warm things"
                    name="question2"
                    value="Blankets and warm things"
                    onChange={handleChange}
                  />
                  <label htmlFor="Blankets and warm things">  Blankets and warm things</label>
                </div>
              </div>

              {/* Question 3 - Checkbox */}
              <div className = 'puzzles-games-question'>
                <label>3. Which musicians are good?</label>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="Pitbull"
                    name="question3"
                    value="Pitbull"
                    onChange={handleChange}
                  />
                  <label htmlFor="Pitbull">  Pitbull</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="Abba"
                    name="question3"
                    value="Abba"
                    onChange={handleChange}
                  />
                  <label htmlFor="Abba">  Abba</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="Bon Jovi"
                    name="question3"
                    value="Bon Jovi"
                    onChange={handleChange}
                  />
                  <label htmlFor="Bon Jovi">  Bon Jovi</label>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button type="submit" className='primary-text' disabled>
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className='puzzles-games-photos-container'>
            <h2 className='primary-heading'>Fun Nonsense</h2>
            <p className='primary-text'>Enjoy these goofy photos and videos.</p>
            <img src="lindsay+john_26.jpg" alt=""></img>
            <img src="lindsay+john_37.jpg" alt=""></img>
            <video width="400" controls>
              <source src="/videos/lindsay-baseball.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video width="400" controls>
              <source src="/videos/sandal-toe.MOV" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    </div>
  );
};

export default QuizForm;