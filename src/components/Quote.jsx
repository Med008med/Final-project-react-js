import React, { useState } from 'react';

const Quote = () => {
  const [quote, setQuote] = useState('Numberless are the worlds wonders, but none more wonderful than man. Sophocles');
  const [author, setAuthor] = useState('');
  const [liked, setLiked] = useState(false);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setLiked(false); 
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  const handleNewQuote = () => {
    fetchQuote();
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <h2>Random Quote</h2>
      <blockquote>
        <p>{quote}</p>
        <footer>{author}</footer>
      </blockquote>
      <div className="buttons">
        <button onClick={handleNewQuote}>Get Another Quote</button>
        <button
          onClick={handleLike}
          style={{ backgroundColor: liked ? 'red' : '#555' }}
        >
          {liked ? 'Liked' : 'Like'}
        </button>
      </div>
    </div>
  );
};

export default Quote;



