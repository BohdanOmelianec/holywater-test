export interface IQuestion {
    number: number,
    question: string,
    description: string,
    options: string[],
    type: string,
    answer: null | string[],
}