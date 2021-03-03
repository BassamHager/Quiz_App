export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async (
  amount: number,
  difficutly: Difficulty
) => {
  const endpoint = `http://opentdb.com/api.php?amount=${amount}&difficulty=${difficutly}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(data);
};
