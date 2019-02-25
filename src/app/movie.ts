export interface IMovie{
    title: string,
    category: number,
    rating: number,
    isDeleted : boolean

}

export interface IMovieDisplay{
    
    id: number,
    title: string,
    categoryName: string,
    rating: number
}
