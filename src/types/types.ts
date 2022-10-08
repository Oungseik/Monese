export type PostType = 'movies' | 'series' | 'shorts';

export type GetDirectory = (postType: PostType) => string;
export type GetPath = (PostType: PostType) => (fileName: string) => string;

export type GetAsset = (
  assetType: 'images'
) => (
  postType: 'movies' | 'series'
) => (showName: string) => (fileName: string) => string;

export type GetFileNames = (directory: string) => string[];

export type GetId = (fileName: string) => string;

type DownloadInfo = {
  server: 'google drive' | 'mega' | 'telegram';
  quality: '720p' | '1080p';
  fileSize: 'string';
  link: 'string';
};

export type MoviePostMetaDataSchema = {
  title: string;
  poster: string;
  imdbRating: number;
  duration: string;
  genres?: string[];
  trailerUrl: string;
  DownloadInfos: DownloadInfo[];
};
