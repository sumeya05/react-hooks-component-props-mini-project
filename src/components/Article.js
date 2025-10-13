import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Bonus: Generate reading time indicator
  let readIndicator = "";
  if (minutes < 30) {
    const cups = Math.ceil(minutes / 5);
    readIndicator = "☕️".repeat(cups);
  } else {
    const bentos = Math.ceil(minutes / 10);
    readIndicator = "🍱".repeat(bentos);
  }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>
        {readIndicator} {minutes} min read
      </p>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
