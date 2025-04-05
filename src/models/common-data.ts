export interface CommonDataDTO {
    name: string,
    notes: string[],
    codeGuide: CodeGuide[]
}

interface CodeGuide {
    content: string,
    images: string[]
}