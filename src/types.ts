type Challenge = {
  id: string;
  name: string;
  description?: string;
  points?: number;
  categories: string[];
  difficulty?: string;
  expectedTime?: string;
};

export default Challenge;
