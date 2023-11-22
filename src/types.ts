type Challenge = {
  id: string;
  name: string;
  points: number;
  categories: string[];
  difficulty?: string;
  expectedTime?: string;
};

export default Challenge;
