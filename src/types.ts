export interface SkillItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  overview: string;
  focusAreas: string[];
  visuals: {
    leftTop: string;
    leftBottom: string;
    rightTall: string;
  };
}
