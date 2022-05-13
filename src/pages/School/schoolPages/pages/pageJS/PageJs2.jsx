import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageJs2 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        
        <h1>Подключение файла со скриптами JavaScript</h1>
        <p>
        JavaScript код можно писать в отдельном файле, который затем будет подключен к HTML файлу. Давайте посмотрим, как это делается. 
        </p>
        <p>
        Для начала создадим файл с нашим скриптом. У этого файла должно быть расширение .js. Для примера давайте назовем его script.js. Разместим в нем какой-нибудь код:
        </p>
        <h4>script.js</h4>
        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>alert</span>
              <span>('text');</span>
            </li>
          </ol>
        </Box>
        <p>
        Давайте теперь подключим наш файл со скриптом к HTML файлу. Для этого в теге script в атрибуте src нужно указать путь к файлу со скриптом:
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
              <span className={classes.tegMaim}>        &lt;script <span className={classes.tegSupport}> src="script.js"</span>&gt;  &lt;/script&gt;</span>
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
          Сделайте файл со скриптом. Подключите его к вашему HTML файлу. Проверьте его работу.
          </p>
        </Box>
        <h1>Несколько файлов</h1>
        <p>Можно подключать не один, а несколько файлов с помощью нескольких тегов script:</p>

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
              <span className={classes.tegMaim}>        &lt;script <span className={classes.tegSupport}> src="script1.js"</span>&gt;  &lt;/script&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>        &lt;script <span className={classes.tegSupport}> src="script2.js"</span>&gt;  &lt;/script&gt;</span>
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
          <h1>Задача 2</h1>
          <p>
          Сделайте три файла со скриптами. Подключите их к вашему HTML файлу. Проверьте их работу.
          </p>
        </Box>

        <h1>Замечание</h1>
        <p>
        Учтите, что в теге <i>script</i> можно либо писать код, либо подключить файл. Попытка сделать это одновременно не будет работать. Поэтому следующий код не рабочий: 
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
              <span className={classes.tegMaim}>        &lt;script <span className={classes.tegSupport}> src="script.js"</span>&gt;</span>
            </li>
            <li>
                <span className={classes.tegSupport}>               alert</span>
                <span>('text');</span>
            </li>
            <li>
                <span className={classes.tegMaim}>        &lt;/script&gt;</span>
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


        <Box className={classes.footer}>
          <Link to="/Js/1">
            <Box className={classes.footerArrow}>←</Box>
          </Link>
          <Link to="/Js/3">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageJs2);
