import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import {
  GetAsset,
  GetDirectory,
  GetFileNames,
  GetId,
  GetPath,
  GetPost,
  MoviePostMetaDataSchema,
} from '@/types/types';

export const getDirectory: GetDirectory = (postType) =>
  path.join(process.cwd(), `posts/${postType}`);

export const getFileNames: GetFileNames = (directory) =>
  fs.readdirSync(directory);
export const getId: GetId = (fileName) => fileName.replace(/\.mdx$/, '');

export const getAsset: GetAsset =
  (assetType) => (postType) => (showName) => (fileName) => {
    return `/${assetType}/${postType}/${showName}/${fileName}`;
  };

export const getPath: GetPath = (postType) => (fileName) =>
  path.join(process.cwd(), `posts/${postType}/${fileName}`);

export const getPost: GetPost = (path) => {
  const fileContent = fs.readFileSync(path, 'utf8');
  const matterResult = matter(fileContent);

  return {
    ...matterResult.data,
  } as MoviePostMetaDataSchema;
};
