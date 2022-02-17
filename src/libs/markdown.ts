/**
 * @file This file contains variables, functions and types/interfaces handles markdown files.
 */

/*----------------------------------
| General Declarations
----------------------------------*/

/**
 * ### General Interface of the Markdown Frontmatter
 * Please search for other frontmatter interfaces instead of using this.
 */
export interface Frontmatter {
  title: { ko: string; en: string };
  cover_image_url?: string;
  countries?: string[];
  date?: string;
}

/*----------------------------------
| Route Post Markdowns
----------------------------------*/

/**
 * ### Interface of the Route Post Frontmatter
 */
export interface RoutesFrontmatter
  extends Required<Pick<Frontmatter, 'title' | 'cover_image_url' | 'countries'>> {}

/**
 * ### Get Route Posts
 * This function will return information about the route posts.
 * @author Jon Ganebski
 */
export function getRoutePosts() {
  try {
    const posts = Object.entries(
      import.meta.globEager('../pages/posts/routes/*.md') as Record<string, RoutesFrontmatter>,
    ).map(([filePath, frontmatter]) => {
      const path = filePath.replace('../pages', '').replace('.md', '');
      const fileName = path.split('/').at(-1);
      if (!fileName) throw Error('File name is not detected');
      const [from, to] = fileName.split('T');
      return { fileName, path, from, to, ...frontmatter };
    });
    return posts;
  } catch (error) {
    console.error(error);
  }
}

/*----------------------------------
| Tech Post Markdowns
----------------------------------*/

/**
 * ### Interface of the Tech Post Frontmatter
 */
export interface TechsFrontmatter
  extends Required<Pick<Frontmatter, 'title' | 'date' | 'cover_image_url'>> {}

/**
 * ### Get Tech Posts
 * This function will return information about the tech posts.
 * @author Jon Ganebski
 */
export function getTechPosts() {
  try {
    const posts = Object.entries(
      import.meta.globEager('../pages/posts/techs/*.md') as Record<string, TechsFrontmatter>,
    ).map(([filePath, frontmatter]) => {
      const path = filePath.replace('../pages', '').replace('.md', '');
      const fileName = path.split('/').at(-1);
      if (!fileName) throw Error('File name is not detected');
      return { fileName, path, ...frontmatter };
    });
    return posts;
  } catch (error) {
    console.error(error);
  }
}