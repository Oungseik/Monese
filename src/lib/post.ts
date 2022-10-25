import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

import {
  GetAsset,
  GetDirectory,
  GetFileNames,
  GetId,
  GetPath,
  GetPost,
  GetPostData,
  MediaMetaDataSchema,
} from '@/types/types';

export const getDirectory: GetDirectory = (postType) =>
  path.join(process.cwd(), `posts/${postType}`);

export const getFileNames: GetFileNames = (directory) =>
  fs.readdirSync(directory);
export const getId: GetId = (fileName) => fileName.replace(/\.mdx$/, '');

export const getAsset: GetAsset =
  (assetType) => (postType) => (id) => (fileName) => {
    return `/${assetType}/${postType}/${id}/${fileName}`;
  };

export const getPath: GetPath = (postType) => (fileName) =>
  path.join(process.cwd(), `posts/${postType}/${fileName}`);

export const getPostData: GetPostData = (postType) => (fileName) => {
  const id = getId(fileName);
  const path = getPath(postType)(fileName);
  const fileContent = fs.readFileSync(path, 'utf8');
  const matterResult = matter(fileContent);

  return {
    id,
    ...matterResult.data,
  } as MediaMetaDataSchema;
};

export const getPost: GetPost = async (postType, fileName) => {
  const id = getId(fileName);
  const path = getPath(postType)(fileName);

  const fileContent = fs.readFileSync(path, 'utf8');
  const matterResult = matter(fileContent);

  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content);
  const contentHTML = processedContent.toString();

  return {
    ...(matterResult.data as MediaMetaDataSchema),
    id,
    contentHTML,
  };
};
