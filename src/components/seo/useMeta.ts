import { graphql, useStaticQuery } from 'gatsby';

interface UseMeta {
  title: string;
}

const useMeta = (): UseMeta => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return {
    title: data.site.siteMetadata.title,
  };
};

export default useMeta;
