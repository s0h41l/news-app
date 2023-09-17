export interface Language {
    key: string,
    title: string,
    direction: string
}

export interface Article {
    title: string,
    urlToImage: string,
    description: string,
    url: string,
}

export interface ArticleType {
    key: string,
    title: string
}