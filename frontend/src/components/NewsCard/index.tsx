import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Article } from "../../interfaces";

const NewsCard: React.FC<Article> = ({
  title,
  urlToImage,
  url,
  description,
}) => {
  const onMediaFallback = (event: any) =>
    (event.target.src =
      "https://techouse.com.pk/wp-content/themes/ryse/assets/images/no-image/No-Image-Found-400x264.png");

  const openInNewTab = () => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Card
      style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}
    >
      <CardActionArea onClick={openInNewTab}>
        <CardMedia
          component="img"
          alt={title}
          height="140"
          image={urlToImage}
          onError={onMediaFallback}
        />
        <CardContent style={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NewsCard;
