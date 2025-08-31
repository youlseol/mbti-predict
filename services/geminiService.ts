
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const getMbtiDescription = async (mbtiType: string): Promise<string> => {
  try {
    const prompt = `
      당신은 MBTI 전문가입니다. ${mbtiType} 유형에 대해 아래 형식에 맞춰서 한국어로 자세하고 친근한 말투로 설명해주세요.

      ### 한줄 요약
      - 이 유형을 한 문장으로 정의해주세요.

      ### 주요 특징
      - 3-4가지 핵심적인 특징을 불렛 포인트로 설명해주세요.

      ### 장점
      - 대표적인 장점 2-3가지를 설명해주세요.

      ### 단점
      - 보완하면 좋을 단점 2-3가지를 설명해주세요.

      ### 어울리는 직업
      - 추천 직업 3가지를 알려주세요.

      ### 연애 스타일
      - 연애할 때 어떤 특징을 보이는지 설명해주세요.

      결과는 마크다운 형식으로 보기 좋게 정리해주세요.
    `;

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
    });
    
    return response.text;

  } catch (error) {
    console.error("Error fetching MBTI description from Gemini:", error);
    throw new Error("Failed to generate MBTI description.");
  }
};
