import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../Utils/fetchFromApi";
const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => {
      setChannelDetail(data?.items[0]);
    });
    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => {
        setVideos(data?.items);
      }
    );
  }, [id]);
  console.log(channelDetail, videos);
  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background: `linear-gradient(34deg, rgba(2,0,36,1) 0%, rgba(9,8,114,1) 5%, rgba(97,212,134,1) 35%, rgba(113,112,198,1) 100%, rgba(121,9,62,1) 100%, rgba(0,212,255,1) 100%)`,
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCard marginTop="-94px" channelDetail={channelDetail} />
      </Box>
      <Box display={"flex"} p={2}>
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
