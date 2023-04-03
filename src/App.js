import { motion } from 'framer-motion';
import { useState } from 'react';  

const cardsData = [
  { title: "Lorem", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id placerat tellus, at sagittis orci. Mauris vehicula ligula ipsum, sed semper nulla vulputate et. Aenean eget massa at arcu aliquam malesuada eu nec erat." },
  { title: "lorem", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id placerat tellus, at sagittis orci. Mauris vehicula ligula ipsum, sed semper nulla vulputate et. Aenean eget massa at arcu aliquam malesuada eu nec erat." },
  { title: "lorem", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id placerat tellus, at sagittis orci. Mauris vehicula ligula ipsum, sed semper nulla vulputate et. Aenean eget massa at arcu aliquam malesuada eu nec erat." },
  // ... add more data as needed
];

function App() {
  const [isOpen, setIsOpen] = useState(null); 

  const handleCardClick = (index) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };

  return (
    <div className="App">
      {cardsData.map((card, index) => (      
        <motion.div
          key={index} // add a key prop to avoid warning about unique keys
          transition={{layout:{ duration: 1, type: "spring"} }}
          layout="position" 
          onClick={() => handleCardClick(index)} 
          className='card'
          style={{borderRadius: '1rem', boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'}}
        > 
          <motion.h2>{card.title}</motion.h2>
          {isOpen === index && 
            <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 1}}
              className='expand'
            > 
              <p>{card.content}</p>
            </motion.div>
          }
        </motion.div>
      ))}
    </div>
  );
}

export default App;
