import { useParams } from "react-router-dom";
import { useGetSingelVideoQuery } from "../../redux/features/api/apiSlice";
import Description from "../video/Description";
import Player from "../video/Player";
import RelatedVideos from "../video/related/RelatedVideos";
import PlayerLoader from "../ui/loaders/PlayerLoader";
import DescriptionLoader from "../ui/loaders/DescriptionLoader";
import RelatedvideLoader from "../ui/loaders/RelatedVideoLoader";
import Error from "../ui/Error";

export default function Video() {
  const { id } = useParams();
  const { data: video, isError, isLoading } = useGetSingelVideoQuery(id);
  const { link, title } = video || {};
  // decision what will be render
  let content = null;
  if (isLoading)
    content = (
      <>
        <PlayerLoader />
        <DescriptionLoader />
      </>
    );
  if (!isLoading && isError) content = <Error message={"There was Error !"} />;
  if (!isError && !isLoading && video?.id)
    content = (
      <>
        <Player link={link} title={title} />

        <Description video={video} />
      </>
    );
  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
        <div className="grid grid-cols-3 gap-2 lg:gap-8">
          <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {content}
          </div>
          {isLoading ? (
            <RelatedvideLoader />
          ) : !isError && !isLoading && video?.id ? (
            <RelatedVideos title={title} id={id} />
          ) : (
            <Error message={"There was an error"} />
          )}
        </div>
      </div>
    </section>
  );
}
