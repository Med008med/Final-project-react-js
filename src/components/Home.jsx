import React, { useState } from 'react';

const Home = () => {
  const [comment, setComment] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSend = () => {
    setClicked(true);
      setComment("");
  };

  return (
    <div>
      <h3>Welcome to TrioBoost, your all-in-one solution to stay productive, manage your time, and find daily inspiration with motivational quotes.</h3>
      <input
        type="text"
        value={comment}
        onChange={(e) => {
          setClicked(false);
          setComment(e.target.value);
        }}
        placeholder="Leave a comment here ..."
      />
      <button onClick={handleSend}>Send</button>
      {clicked && (
        <p>{comment.trim().length > 0 ? "Comment sent successfully!" : "Please enter a comment before sending!"}</p>
      )}
    </div>
  );
};

export default Home;
