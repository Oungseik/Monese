export type PostType = 'movies' | 'series' | 'shorts';
export type GetDirectory = (postType: PostType) => string;
export type GetPath = (PostType: PostType) => (fileName: string) => string;

export type GetAsset = (
  assetType: 'images'
) => (
  postType: 'movies' | 'series'
) => (id: string) => (fileName: string) => string;

export type GetFileNames = (directory: string) => string[];

export type GetId = (fileName: string) => string;

export type GetPostData = (
  postType: PostType
) => (fileName: string) => MediaMetaDataSchema;

export type GetPost = (
  postType: PostType,
  fileName: string
) => Promise<
  {
    contentHTML: string;
  } & MediaMetaDataSchema
>;

export type DownloadInfo = {
  server: 'google drive' | 'mega' | 'telegram';
  quality: '720p' | '1080p';
  fileSize: 'string';
  link: 'string';
};

type Poster = {
  small: string;
  large: string;
};

// fields required in the markdown file
export type MediaMetaDataSchema = {
  id: string;
  title: string;
  date: string;
  type: 'movie' | 'series';
  poster: Poster;
  imdbRating: number;
  duration: string;
  genres?: string[];
  trailerUrl: string;
  downloadLinks: DownloadInfo[];
};

export type MediaType = {
  content: string;
} & MediaMetaDataSchema;
