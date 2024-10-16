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
          <div className = 'puzzles-games-main-text-container'>
            <h2 className='primary-heading'>Quiz!</h2>
            <form className='puzzles-games-forms'>
              {/* Question 1 - Short answer */}
              <div>
                <label htmlFor="question1">1. What is the capital of France?  </label>
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
              <div>
                <label>2. Which of these is a programming language?</label>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="python"
                    name="question2"
                    value="Python"
                    onChange={handleChange}
                  />
                  <label htmlFor="python">Python</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="html"
                    name="question2"
                    value="HTML"
                    onChange={handleChange}
                  />
                  <label htmlFor="html">HTML</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="radio"
                    id="css"
                    name="question2"
                    value="CSS"
                    onChange={handleChange}
                  />
                  <label htmlFor="css">CSS</label>
                </div>
              </div>

              {/* Question 3 - Checkbox */}
              <div>
                <label>3. Select the planets in our solar system:</label>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="earth"
                    name="question3"
                    value="Earth"
                    onChange={handleChange}
                  />
                  <label htmlFor="earth">Earth</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="mars"
                    name="question3"
                    value="Mars"
                    onChange={handleChange}
                  />
                  <label htmlFor="mars">Mars</label>
                </div>
                <div className = 'puzzles-games-input'>
                  <input
                    type="checkbox"
                    id="jupiter"
                    name="question3"
                    value="Jupiter"
                    onChange={handleChange}
                  />
                  <label htmlFor="jupiter">Jupiter</label>
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
        </div>
    </div>
  );
};

export default QuizForm;