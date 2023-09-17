import React from "react";
import { Chip, Box } from "@mui/material";

interface ArticleType {
  key: string;
  title: string;
}

interface ArticleTypesProps {
  types: ArticleType[];
  selectedType: string | null;
  onTypeSelect: (type: string) => void;
}

const ArticleTypes: React.FC<ArticleTypesProps> = ({
  types,
  selectedType,
  onTypeSelect,
}) => {
  return (
    <Box display="flex" gap={1}>
      {types.map((type) => (
        <Chip
          key={type.key}
          label={type.title}
          color={selectedType === type.key ? "primary" : "default"}
          onClick={() => onTypeSelect(type.key)}
        />
      ))}
    </Box>
  );
};

export default ArticleTypes;
