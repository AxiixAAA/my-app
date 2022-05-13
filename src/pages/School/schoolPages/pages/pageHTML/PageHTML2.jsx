import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageHTML2 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Основная структура страницы HTML</h1>
        <p>
          Страница сайта - это обычный текстовый файл с расширением .html.
          Внутри этого файла и хранится текст HTML страницы вместе с тегами.
          Этот файл обязательно должен иметь следующие теги: тег &lt;html&gt;,
          который должен содержать в себе текст всего сайта (все, что написано
          вне этого тега, браузером будет проигнорировано), а внутри него должны
          быть еще два тега: тег &lt;head&gt; для служебного содержимого
          страницы и тег &lt;body&gt; - для основного текста, который и виден на
          экране браузера.
        </p>
        <p>
          В служебное содержимое, которое располагается внутри тега
          &lt;head&gt;, входит много различных вещей, но пока нам нужны только
          две из них. Это тег &lt;title&gt;, задающий название страницы, которое
          будет видно во вкладке браузера, и тег &lt;meta&gt;, который задает
          кодировку страницы (она ставится в атрибуте charset и обычно имеет
          значение utf-8).
        </p>
        <p>
          Кроме того, перед тегом &lt;html&gt; обычно пишется конструкция
          doctype, которая указывает версию языка HTML, на которой сделан сайт.
          Актуальная сейчас версия языка имеет номер пять и доктайп для нее
          должен выглядеть так - &lt;!DOCTYPE html&gt;.
        </p>
        <p>Итак, давайте посмотрим на основную структуру страницы:</p>
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
              <span className={classes.tegMaim}>        &lt;title&gt;</span>
              <span>Это заголовок тайтл</span>
              <span className={classes.tegMaim}>&lt;/title&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/head&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;body&gt;</span>
            </li>
            <li>
              <span>        Это основное содержимое страницы.</span>
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
            Создайте файл с расширением .html. Скопируйте в него основную
            структуру страницы. Сохраните ваш файл. Затем откройте его в
            браузере перетянув файл мышкой или выполнив двойной клик по нему.
          </p>
        </Box>

        <Box className={classes.footer}>
          <Link to="/html/1">
            <Box className={classes.footerArrow}>←</Box>
          </Link>
          <Link to="/html/3">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageHTML2);
