export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    crit: Crit | undefined;
  }
    
    export interface Genre {
      id: number;
      name: string
    }
    
    export interface ProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string
  }
    
    export interface ProductionCountry {
    iso_3166_1: string;
    name: string
  }
    
    export interface SpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string
  }
  
  export interface MovieGame {
    release_date: string;
    vote_average: number;
    runtime: number;
    budget: number;
    revenue: number;
  }

  export interface FavoriteMovie {
    id?: string | undefined,
    userId?: number | undefined,
    movieId?: number | undefined,
    movieTitle: string | undefined;
    posterPath: string | undefined;
    review: string | undefined;
    rating: number |undefined;
  }

  export interface Rating {
    value: number;
    viewValue: number;
  }


  export interface Crit {
    tag: string,
    key: string;
  }

  export interface DiscoverMovie {
    page: number;
    results: ResultMovie[];
    total_pages: number;
    total_results: number;
  }
  
  export interface ResultMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }