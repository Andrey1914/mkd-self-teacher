const highlightInput = (input: string, correct: string, show: boolean) => {
  if (!show || input === "") return {};
  const isCorrect = input.trim().toLowerCase() === correct.toLowerCase();
  return {
    boxShadow: isCorrect ? "0 0 8px 3px #00c150" : "0 0 8px 3px #ffa347",
  };
};

export default highlightInput;
