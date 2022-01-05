import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import BlockContent from '@sanity/block-content-to-react';
import ContainerBlock from "../../components/ContainerBlock";

export const Post = ({ title, body, image, poststatus, content, caption }) => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'vn88o3gc',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
	<ContainerBlock title="Lasse Buus - Blog">
    <div>
      <div className="">
		{imageUrl && <img className="max-w-6xl rounded-md full-w-image mx-auto dark:border border-synthPink dark:shadow-3xl" src={imageUrl} />}
		<div className="max-w-6xl mx-auto relative -top-14">
			<span className="relative left-0 bottom-0 my-4 mr-4 text-black font-semibold bold text-sm bg-white shadow-lg rounded-md px-2 py-1">{caption}</span>
			<span className="relative bottom-0 my-4 text-white font-semibold bold text-sm bg-synthPink shadow-lg rounded-md px-2 py-1">{poststatus}</span>
		</div>
        <div className="max-w-6xl mx-auto">
			<h1 className="text-5xl md:text-9xl font-bold py-21 text-center md:text-left my-8 dark:text-white">
			{title}
			</h1>
		</div>
        <div className="max-w-6xl mx-auto">
			<BlockContent blocks={content} className="dark:text-white" />
        </div>
      </div>
    </div>
	</ContainerBlock>
  );
};

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if (!pageSlug) {
    return {
      notFound: true
    }
  }

  const query = encodeURIComponent(`*[ _type == "posts" && slug.current == "${pageSlug}" ]`);
  const url = `https://vn88o3gc.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then(res => res.json());
  const post = result.result[0];

  if (!post) {
    return {
      notFound: true
    }
  } else {
    return {
      props: {
        poststatus: post.status,
        title: post.title,
        image: post.image,
		content: post.blockText,
		caption: post.imagecaption
      }
    }
  }
};

export default Post;