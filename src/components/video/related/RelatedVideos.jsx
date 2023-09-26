import { useGetRelatedVideosQuery } from "../../../redux/features/api/apiSlice.jsx";
import Error from "../../ui/Error.jsx";
import RelatedVideoLoader from "../../ui/loaders/RelatedVideoLoader.jsx";
import RelatedVideo from "./RelatedVideo.jsx";
import PropTypes from "prop-types";

export default function RelatedVideos({ title, id }) {
  const {
    data: relatedVideos,
    isError,
    isLoading,
  } = useGetRelatedVideosQuery({ title, id });

  let content = null;

  if (isLoading)
    content = (
      <>
        <RelatedVideoLoader />
        <RelatedVideoLoader />
        <RelatedVideoLoader />
      </>
    );
  if (!isLoading && isError)
    content = <Error message={"There was an error !"} />;

  if (!isError && !isLoading && relatedVideos?.length == 0)
    content = <Error message={"No Related Video Found !"} />;
  if (!isError && !isLoading && relatedVideos?.length > 0)
    content = relatedVideos.map((video) => (
      <RelatedVideo key={video.id} video={video} />
    ));
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}
RelatedVideos.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};
