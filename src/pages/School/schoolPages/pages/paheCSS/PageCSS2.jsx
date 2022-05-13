import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageCSS2 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Способы задания цвета на CSS</h1>
        <p>
        В предыдущем уроке вы увидели, как можно задать цвет ключевым словом. Ключевых слов, однако, немного, и с их помощью нельзя сделать все возможные оттенки всех цветов. Для этого существует еще два способа задания цветов. Через rgb и через решетку #.
        </p>
        <p>Пример задания цвета через rgb:</p>
        
        <Box className={classes.blockCode}>
          <ol>
            <li>
                <span className={classes.tegMaim}>p </span>
                <span>{`{`}</span>
            </li>
            <li>
                <span className={classes.tegSupport}>    color</span>
                <span>:  rgb(255, 236, 114);</span>
            </li>
            <li>
                <span>{`}`}</span>
            </li>
           
          </ol>
        </Box>

        <p>Пример задания цвета через #:</p>

        <Box className={classes.blockCode}>
          <ol>
            <li>
                <span className={classes.tegMaim}>p </span>
                <span>{`{`}</span>
            </li>
            <li>
                <span className={classes.tegSupport}>    color</span>
                <span>:  #ff0000;</span>
            </li>
            <li>
                <span>{`}`}</span>
            </li>
           
          </ol>
        </Box>

        <p>
        Для того, чтобы получить нужный цвет, используются специальные программы. Вот пример онлайн генератора цвета: <a href="https://colorscheme.ru/">colorscheme.ru</a>,  а вот пример программы, позволяющей замерять цвет:  <a href="http://colorcop.net/download/">colorcop.net</a>.
        </p>
        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>
          С помощью описанных программ сгенерируйте цвет в одном и во втором формате и примените эти цвета к каким-нибудь тегам страницы.
          </p>
        </Box>

        <Box className={classes.footer}>
          <Link to="/css/1">
            <Box className={classes.footerArrow}>←</Box>
          </Link>
          <Link to="/css/3">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageCSS2);
