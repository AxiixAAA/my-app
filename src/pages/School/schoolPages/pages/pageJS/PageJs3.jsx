import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageJs3 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        
        <h1>Кеширование JavaScript файлов браузером</h1>
        <p>
        Браузер может кешировать подключенные JavaScript файлы. Это значит, что он сохраняет их у себя для повышения скорости загрузки сайта. 
        </p>
        <p>
        На практике это ведет к тому, что в какой-то момент при редактировании кода браузер будет применять предыдущую версию кода, а не вашу текущую. 
        </p>
        <p>
        Для борьбы с таким поведеним можно чистить кеш браузера, либо использовать хитрый прием. Его суть заключается в том, что мы при подключении скрипта после имени файла ставим вопрос, знак равно и номер версии вашего скрипта. Когда браузер кеширует файл, вам просто нужно будет увеличить номер на единицу. 
        </p>
        <p>
        Смотрите пример: 
        </p>


        <h4>index.html</h4>
        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>
                &lt;!DOCTYPE
                <span className={classes.tegSupport}> html</span>
                &gt;
              </span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;html&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;head&gt;</span>
            </li>
            <li>
                <span className={classes.tegMaim}>        &lt;meta</span>
              <span className={classes.tegSupport}> charset</span>
              <span>="utf-8"</span>
              <span className={classes.tegMaim}>&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>        &lt;title&gt; </span>
              <span className={classes.tegMaim}>&lt;/title&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>        &lt;script src="script.js?v=1"&gt; &lt;/script&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>    &lt;/head&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;body&gt;</span>
            </li>
            <li>
              <span></span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/body&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/html&gt;</span>
            </li>
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>
          Исправьте подключение вашего файла так, чтобы после имени файла следовал номер его версии.
          </p>
        </Box>



        <Box className={classes.footer}>
          <Link to="/Js/2">
            <Box className={classes.footerArrow}>←</Box>
          </Link>
          <Link to="/school">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageJs3);
