
export type MbtiDimension = 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';

export interface QuestionOption {
  text: string;
  dimension: MbtiDimension;
}

export interface Question {
  question: string;
  options: [QuestionOption, QuestionOption];
}

export interface MbtiResult {
    type: string;
    title: string;
    description: string;
}
