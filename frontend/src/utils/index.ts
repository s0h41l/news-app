import { ArticleType, Language } from "../interfaces";

export const languages: Language[] = [
    {
        key: 'en',
        title: 'English',
        direction: 'ltr'
    },
    {
        key: 'ar',
        title: 'Arabic',
        direction: 'rtl'
    }
]


export const articleTypes: ArticleType[] = [
    { key: 'apple', title: 'Apple' },
    { key: 'meta', title: 'Meta' },
    { key: 'netflix', title: 'Netflix' },
    { key: 'google', title: 'Google' },
    { key: 'twitter', title: 'Twitter' },
    { key: 'tesla', title: 'Tesla' },
    { key: '*', title: 'All' },
]
