import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { languages } from "../../utils/index";
import { Language } from "../../interfaces";

interface HeaderProps {
  onThemeToggle: () => void;
  onLanguageChange: (language: Language) => void;
  isDarkTheme: boolean;
  selectedLanguage: Language;
}

const Header: React.FC<HeaderProps> = ({
  onThemeToggle,
  onLanguageChange,
  isDarkTheme,
  selectedLanguage,
}) => {
  const [anchorElLanguage, setAnchorElLanguage] = useState<null | HTMLElement>(
    null
  );

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElLanguage(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElLanguage(null);
  };

  const handleLanguageChange = (language: Language) => {
    onLanguageChange(language);
    handleMenuClose();
  };

  return (
    <AppBar position="static">
      <Toolbar
        className={
          selectedLanguage.direction === "rtl" ? "rtl-toolbar" : undefined
        }
      >
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News App
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-controls="language-menu"
            aria-haspopup="true"
            onClick={handleLanguageMenuOpen}
          >
            <LanguageIcon fontSize="small" />
          </IconButton>
          <Menu
            id="language-menu"
            anchorEl={anchorElLanguage}
            keepMounted
            open={Boolean(anchorElLanguage)}
            onClose={handleMenuClose}
          >
            {languages.map((language: Language, key) => (
              <MenuItem
                onClick={() => handleLanguageChange(language)}
                key={key}
              >
                {language.title}
              </MenuItem>
            ))}
          </Menu>

          <Typography variant="subtitle2" color="inherit">
            Dark Mode
          </Typography>
          <Switch
            color="default"
            checked={isDarkTheme}
            onChange={onThemeToggle}
            inputProps={{ "aria-label": "toggle dark mode" }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
