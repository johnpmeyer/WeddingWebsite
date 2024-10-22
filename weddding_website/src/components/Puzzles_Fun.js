import React, {useState} from 'react'
import Navbar from './Navbar'
import ConstructionImage from "../Assets/under_construction.jpg"

const QuizForm = () => {
  // State to store form values
  const [formData, setFormData] = useState({
    question1: '',
    question2: '',
    question3: [], // For checkboxes, we'll store selected values in an array
  });

   // State to store success message
   const [message, setMessage] = useState('');

  const expectedAnswers = {
    question1: 'Mamma Mia',
    question2: 'Blankets and warm things',
    question3: ['Pitbull', 'Abba', 'Bon Jovi']
  };

  // Handle input changes (this can be used later if you decide to store answers)
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log("Input changed:" , name, value, checked);
    
    if (type === 'checkbox') {
      // Handle checkbox change
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          [name]: [...prevData[name], value], // Add checked value to the array
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: prevData[name].filter((item) => item !== value), // Remove unchecked value from the array
        }));
      }
    } else {
      // Handle text and radio inputs
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted")

    // Check if inputs match expected answers
    const isQuestion1Correct = formData.question1 === expectedAnswers.question1;
    const isQuestion2Correct = formData.question2 === expectedAnswers.question2;
    const isQuestion3Correct = formData.question3.sort().toString() === expectedAnswers.question3.sort().toString(); // Checkboxes comparison

    if (isQuestion1Correct && isQuestion2Correct && isQuestion3Correct) {
      setMessage('Great Job! You know everything there is to know about Lindsay and John.');
    } else {
      setMessage('Sorry, one or more of your answers are incorrect.\nIf you are stuck on the first one, it\'s a movie that takes place in Greece starring Meryl Streep and Pierce Brosnan.');
    }
  };


  return (
      <div className='App'>
        <div className='puzles-games-container'>
        <Navbar/>
          <div className = 'puzzles-games-form-container'>
            <h2 className='primary-heading'>Quiz!</h2>
            <form  onSubmit={handleSubmit} className='puzzles-games-forms'>
              {/* Question 1 - Short answer */}
              <div className = 'puzzles-games-question'>
                <label htmlFor="question1">1. What is a movie Lindsay and John like a lot? It's also one of their cat's names.  </label>
                <input
                  type="text"
                  id="question1"
                  name="question1"
                  value={formData.question1}
                  onChange={handleChange} 
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
                    checked={formData.question2 === 'People who are selfish'}
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
                    checked={formData.question2 === 'Cold Weather'}
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
                    checked={formData.question2 === 'Blankets and warm things'}
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
                    checked={formData.question3.includes('Pitbull')}
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
                    checked={formData.question3.includes('Abba')}
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
                    checked={formData.question3.includes('Bon Jovi')}
                    onChange={handleChange}
                  />
                  <label htmlFor="Bon Jovi">  Bon Jovi</label>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button type="submit" className='primary-text'>
                  Submit
                </button>
              </div>
            </form>
            {/* Display success or error message */}
              {message && <p>{message}</p>}
          </div>
          <div className='puzzles-games-photos-container'>
            <h2 className='primary-heading'>Fun Nonsense</h2>
            <p>Enjoy these goofy photos and videos.</p>
            <p>Engagement photos were taken by <a href = "http://karenlue.com/">Karen Lue</a></p>
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