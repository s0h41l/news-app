import { articleTypes } from "../../utils";
import ArticleTypes from "../NewsTypes";
import NewsListing from "../NewsListing";
import { Box } from "@mui/material";
import { useState } from "react";

const ArticlesContainer = () => {
  const [selectedType, setSelectedType] = useState(articleTypes[0].key);

  return (
    <>
      <Box mb={5}>
        <ArticleTypes
          types={articleTypes}
          onTypeSelect={(type: string) => setSelectedType(type)}
          selectedType={selectedType}
        />
      </Box>

      <NewsListing articleType={selectedType} />
    </>
  );
};

export default ArticlesContainer;
