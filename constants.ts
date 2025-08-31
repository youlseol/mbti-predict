
import type { Question } from './types';

export const QUESTIONS: Question[] = [
    // --- Round 1 ---
    {
        question: "힘들었던 일주일을 보낸 후, 당신의 재충전 방식은?",
        options: [
            { text: "친구들을 만나 즐겁게 이야기하며 스트레스를 푼다", dimension: "E" },
            { text: "집에서 조용히 혼자만의 시간을 보내며 에너지를 얻는다", dimension: "I" }
        ]
    },
    {
        question: "새로운 기술을 배울 때, 어떤 설명서를 선호하시나요?",
        options: [
            { text: "구체적인 예시와 함께 단계별로 설명된 실용적인 가이드", dimension: "S" },
            { text: "핵심 개념과 미래 가능성을 설명하는 전체적인 개요", dimension: "N" }
        ]
    },
    {
        question: "동료가 당신의 비판적인 피드백에 속상해할 때, 당신의 반응은?",
        options: [
            { text: "상처를 주려는 의도가 아니었음을 논리적으로 설명한다", dimension: "T" },
            { text: "우선 동료의 감정을 위로하고 그의 강점을 먼저 언급한다", dimension: "F" }
        ]
    },
    {
        question: "일상적인 업무를 처리할 때, 당신의 스타일은?",
        options: [
            { text: "명확한 할 일 목록을 만들고 하나씩 완료해나가는 것을 즐긴다", dimension: "J" },
            { text: "상황에 맞춰 유연하게 대처하며, 그 순간에 맞는 일을 처리한다", dimension: "P" }
        ]
    },
    // --- Round 2 ---
    {
        question: "팀 프로젝트에서 당신이 선호하는 역할은?",
        options: [
            { text: "적극적으로 아이디어를 내고 토론을 이끌어가는 역할", dimension: "E" },
            { text: "다른 사람의 의견을 경청하고 생각을 정리하여 기여하는 역할", dimension: "I" }
        ]
    },
    {
        question: "흥미로운 사건을 친구에게 설명할 때, 당신은 어디에 초점을 맞추나요?",
        options: [
            { text: "무슨 일이 있었는지, 보고 들은 것을 사실 그대로 전달한다", dimension: "S" },
            { text: "사건의 전체적인 인상과 그것이 갖는 의미를 이야기한다", dimension: "N" }
        ]
    },
    {
        question: "인생의 중요한 결정을 내릴 때, 무엇을 더 중시하나요?",
        options: [
            { text: "객관적인 사실과 논리적인 분석을 통한 합리적인 선택", dimension: "T" },
            { text: "나와 주변 사람들에게 미칠 영향을 고려한 마음의 결정", dimension: "F" }
        ]
    },
    {
        question: "친구가 갑자기 '내일 당장 여행 가자!'라고 제안한다면?",
        options: [
            { text: "다른 계획도 있고 너무 갑작스러워서 망설여진다", dimension: "J" },
            { text: "재미있겠다! 일단 떠나서 생각해보자고 한다", dimension: "P" }
        ]
    },
    // --- Round 3 ---
    {
        question: "파티나 모임에 갔을 때, 당신은 주로 어디에 있나요?",
        options: [
            { text: "사람들 중심에서 여러 사람과 어울리며 대화한다", dimension: "E" },
            { text: "한두 명과 조용하고 깊이 있는 대화를 나누는 편이다", dimension: "I" }
        ]
    },
    {
        question: "가구를 조립할 때 당신의 방식은?",
        options: [
            { text: "설명서를 한 단계씩 정확하게 따라 조립한다", dimension: "S" },
            { text: "완성된 그림을 보고 부품들이 어떻게 맞춰질지 직감적으로 파악한다", dimension: "N" }
        ]
    },
    {
        question: "논쟁에서 더 중요하다고 생각하는 것은?",
        options: [
            { text: "불편하더라도 진실을 정확하게 말하는 것", dimension: "T" },
            { text: "모두의 감정이 상하지 않도록 조화로운 분위기를 유지하는 것", dimension: "F" }
        ]
    },
    {
        question: "마감 기한에 대한 당신의 생각은?",
        options: [
            { text: "일을 체계적으로 끝낼 수 있게 도와주는 유용한 지침이다", dimension: "J" },
            { text: "창의적인 결과물을 내는 데 방해가 되는 압박감이다", dimension: "P" }
        ]
    },
    // --- Round 4 ---
    {
        question: "많은 사람들과 교류한 후 당신의 상태는?",
        options: [
            { text: "활기차고 에너지가 넘친다", dimension: "E" },
            { text: "피곤하고 혼자만의 시간이 필요하다", dimension: "I" }
        ]
    },
    {
        question: "당신의 마음을 더 끄는 문장은 무엇인가요?",
        options: [
            { text: "현실적이고 증명된 것을 신뢰하라", dimension: "S" },
            { text: "상상력과 미래의 가능성을 믿어라", dimension: "N" }
        ]
    },
    {
        question: "친구가 슬픈 영화를 보며 울 때, 당신은?",
        options: [
            { text: "주인공의 행동에 대해 분석하며 위로할 방법을 찾는다", dimension: "T" },
            { text: "그의 슬픔에 공감하며 조용히 안아준다", dimension: "F" }
        ]
    },
    {
        question: "마트에서 장을 볼 때, 당신은 보통...",
        options: [
            { text: "미리 작성한 목록에 따라 계획적으로 구매한다", dimension: "J" },
            { text: "둘러보다가 눈에 들어오는 흥미로운 것들을 구매한다", dimension: "P" }
        ]
    },
    // --- Round 5 ---
    {
        question: "새로운 아이디어가 떠올랐을 때, 당신의 첫 행동은?",
        options: [
            { text: "다른 사람에게 바로 공유하여 의견을 구한다", dimension: "E" },
            { text: "혼자 충분히 생각하며 아이디어를 발전시킨다", dimension: "I" }
        ]
    },
    {
        question: "휴가를 계획할 때 더 설레는 순간은?",
        options: [
            { text: "어떤 맛있는 음식을 먹고 어떤 활동을 할지 구체적으로 상상할 때", dimension: "S" },
            { text: "그곳에서만 느낄 수 있는 새로운 분위기와 경험을 상상할 때", dimension: "N" }
        ]
    },
    {
        question: "당신이 '옳았다'는 것이 증명되었을 때, 언제가 더 만족스러운가요?",
        options: [
            { text: "나의 논리적인 주장이 사실로 증명되었을 때", dimension: "T" },
            { text: "나의 결정으로 인해 모두가 행복해졌을 때", dimension: "F" }
        ]
    },
    {
        question: "어떤 환경에서 더 편안함을 느끼나요?",
        options: [
            { text: "잘 정돈되고 예측 가능한 환경", dimension: "J" },
            { text: "자유롭고 즉흥적인 상황이 가능한 환경", dimension: "P" }
        ]
    }
];

export const MBTI_INFO: Record<string, { title: string }> = {
    'ISTJ': { title: '청렴결백한 논리주의자' },
    'ISFJ': { title: '용감한 수호자' },
    'INFJ': { title: '선의의 옹호자' },
    'INTJ': { title: '용의주도한 전략가' },
    'ISTP': { title: '만능 재주꾼' },
    'ISFP': { title: '호기심 많은 예술가' },
    'INFP': { title: '열정적인 중재자' },
    'INTP': { title: '논리적인 사색가' },
    'ESTP': { title: '모험을 즐기는 사업가' },
    'ESFP': { title: '자유로운 영혼의 연예인' },
    'ENFP': { title: '재기발랄한 활동가' },
    'ENTP': { title: '뜨거운 논쟁을 즐기는 변론가' },
    'ESTJ': { title: '엄격한 관리자' },
    'ESFJ': { title: '사교적인 외교관' },
    'ENFJ': { title: '정의로운 사회운동가' },
    'ENTJ': { title: '대담한 통솔자' },
};
