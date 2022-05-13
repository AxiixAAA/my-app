import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageJs1 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Введение в язык JavaScript</h1>
        <p>Язык JavaScript предназначен для выполнения в браузере наряду с HTML и CSS. Но, если эти языки предназначены для верстки структуры сайта, то JavaScript позволяет "оживлять" web-страницы - делать их реагирующими на действия пользователя или демонстрировать некоторую динамичность (к примеру, смена картинок в блоке или красивые плавно выпадающие менюшки).</p>
        <h1>Как запустить JavaScript</h1>
        <p>
        JavaScript код пишется прямо на HTML странице внутри тега script. Этот тег можно размещать в любом месте страницы. Смотрите пример:
        </p>
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
              <span className={classes.tegMaim}>        &lt;script&gt;</span>
            </li>
            <li>
              <span>             здесь пишем JavaScript код</span>
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

        <h1>Напишем первую программу</h1>
        <p>Давайте напишем нашу первую программу на JavaScript:</p>
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
              <span>Моя первая программа</span>
              <span className={classes.tegMaim}>&lt;/title&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>        &lt;script&gt;</span>
            </li>
            <li>
              <span className={classes.tegSupport}>             alert</span>
              <span>('Привет, мир!');</span>
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
              <span>        моя первая программа</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/body&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/html&gt;</span>
            </li>
          </ol>
        </Box>

        <p>
        Скопируйте этот код и разместите в HTML файле. Затем открой этот файл в браузере - и вы увидите диалоговое окошко с текстом.
        </p>
        <h1>Разберем код программы</h1>
        <p>
        Давайте разберем код написанной нами выше программы. Первым понятием, которое вам нужно узнать, являются <i>функции</i>. Функции позволяют выполнять некоторые действия. В нашем примере есть функция <i>alert()</i>, которая выводит текст на экран в виде диалогового окошка. 
        </p>
        <p>
        Функция состоит из имени (в нашем случае это <i>alert</i>) и круглых скобок, написанных после этого имени. В этих круглых скобках следует писать <i>параметры функции</i>. В нашем случае параметром является текст, который выводится на экран. 
        </p>
        <p>
        В нашем случае функция имеет один параметр, однако бывают функции, в которые нужно передавать несколько параметров. В этом случае эти параметры пишутся через запятую. 
        </p>
        <h1>Замечание</h1>
        <p>
        В дальнейшем я не буду расписывать то, как подключается JavaScript, а буду просто писать JavaScript код, подразумевая, что вы его будете записывать в тегах &lt;script&gt;. С учетом этого замечания наша программа станет выглядеть вот так:
        </p>

        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>alert</span>
              <span>('Привет, мир!');</span>
            </li>
          </ol>
        </Box>
        <h1>Практические задачи</h1>

        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>
          Сделайте файл с вашей первой программой. Выведите в ней на экран какой-нибудь текст.
          </p>
        </Box>

        <Box className={classes.footer}>
          <Link to="/Js/2">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageJs1);
