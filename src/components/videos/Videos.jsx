import { useGetVideosQuery } from "../../redux/features/api/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Video from "./Video";
import Error from "../ui/Error";

export default function Videos() {
  const {
    data: videos,
    isLoading,
    isError,
  } = useGetVideosQuery(undefined, { refetchOnMountOrArgChange: 300 });

  // decisan what will render
  let content = null;
  if (isLoading)
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  if (!isLoading && isError)
    content = <Error message={"An Error Occoured !"} />;
  if (!isError && !isLoading && videos?.length == 0)
    content = <Error message={"No Video Found !"} />;
  if (!isError && !isLoading && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return content;
}
