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
        {imageUrl && <img className="max-w-6xl full-w-image mx-auto" src={imageUrl} />}
		<span className="max-w-6xl mx-auto block py-4">{caption}</span>
        <div className="max-w-6xl mx-auto h-40">
			<h1 className=" text-5xl md:text-9xl font-bold py-21 text-center md:text-left dark:text-white">
			{title}
			</h1>
		</div>
        <div className="max-w-6xl mx-auto h-48">
			<span className="block">{poststatus}</span>
			<p>{content}</p>
          <BlockContent blocks={body} />
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
		content: post.postcontent,
		caption: post.imagecaption
      }
    }
  }
};

export default Post;