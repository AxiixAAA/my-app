import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageHTML3 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Работа с основными HTML тегами</h1>
        <p>
          Давайте теперь изучим основные теги, которые используются на странице.
          В примерах далее я для простоты не буду приводить структуру всей
          страницы, считайте, что мы всегда работаем внутри тега body, если не
          указано иное.
        </p>
        <h1>Абзацы</h1>
        <p>
          Одним из основных элементов страницы являются абзацы. Их можно
          сравнить с абзацами в книге - каждый абзац начинается с новой строки и
          имеет так называемую красную строку (это когда первая строка текста
          абзаца немного отступает вправо). По умолчанию красной строки нет, но
          ее легко сделать (об этом чуть позже).
        </p>
        <p>Абзац создается с помощью тега &lt;p&gt; таким образом:</p>
        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>&lt;p&gt;</span>
            </li>
            <li>
              <span>Это абзац.</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/p&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>&lt;p&gt;</span>
            </li>
            <li>
              <span>Это еще один абзац.</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/p&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>&lt;p&gt;</span>
            </li>
            <li>
              <span>И еще один абзац.</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/p&gt;</span>
            </li>
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>
            Создайте на вашей странице 5 абзацев с каким-нибудь текстом.
            Посмотрите, как эти абзацы будут выглядеть в браузере.
          </p>
        </Box>

        <h1>Заголовки страницы</h1>
        <p>
          Кроме абзацев важное значение на странице имеют заголовки. Их также
          можно сравнить с заголовками из книги - каждая глава имеет свой
          заголовок (название этой главы) и разбита на параграфы, которые тоже
          имеют свои заголовки. Ну, а основной текст страницы располагается в
          абзацах.
        </p>
        <p>
          Заголовки создаются с помощью тегов &lt;h1&gt;, &lt;h2&gt;,
          &lt;h3&gt;, &lt;h4&gt;, &lt;h5&gt;, &lt;h6&gt;. Они имеют разную
          степень важности. В заголовке h1 следует располагать название всей
          HTML страницы, в h2 - название блоков страницы, в h3 - название
          подблоков и так далее.
        </p>
        <p>
          Все заголовки по умолчанию жирные и имеют разный размер (это можно
          поменять через CSS, но об этом позже). Для примера сделаем заголовки
          всех уровней:
        </p>
        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>&lt;h1&gt;</span>
              <span>Заголовок h1</span>
              <span className={classes.tegMaim}>&lt;/h1&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;h2&gt;</span>
              <span>Заголовок h2</span>
              <span className={classes.tegMaim}>&lt;/h2&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;h3&gt;</span>
              <span>Заголовок h3</span>
              <span className={classes.tegMaim}>&lt;/h3&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;h4&gt;</span>
              <span>Заголовок h4</span>
              <span className={classes.tegMaim}>&lt;/h4&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;h5&gt;</span>
              <span>Заголовок h5</span>
              <span className={classes.tegMaim}>&lt;/h5&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;h6&gt;</span>
              <span>Заголовок h6</span>
              <span className={classes.tegMaim}>&lt;/h6&gt;</span>
            </li>
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 2</h1>
          <p>
            Скопируйте приведенный выше код себе и запустите его в браузере.
            Посмотрите, как отличаются размеры заголовков.
          </p>
        </Box>
        <Box className={classes.blockTask}>
          <h1>Задача 3</h1>
          <p>
            Сделайте заголовок h1. Ниже сделайте заголовок h2, а под ним - абзац
            с текстом. После абзацев сделайте еще один заголовок h2, а под ним -
            2 абзаца с текстом.
          </p>
        </Box>

        <h1>Жирный</h1>
        <p>
          Вы уже знаете, что заголовки по умолчанию <b>жирные.</b> Однако, можно
          сделать жирным и обычный текст - достаточно взять его в тег &lt;b&gt;.
          Смотрите пример:{" "}
        </p>

        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>&lt;p&gt;</span>
              <span>
                Это обычный текст, а это &lt;b&gt;<b>жирный</b>&lt;/b&gt; текст.
              </span>
              <span className={classes.tegMaim}>&lt;/p&gt;</span>
            </li>
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 4</h1>
          <p>Проверьте работу тега &lt;b&gt; на вашей странице.</p>
        </Box>

        <h1>Курсив</h1>
        <p>
          Кроме жирного можно сделать также и <i>курсив</i> с помощью тега
          &lt;i&gt;:
        </p>

        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>&lt;p&gt;</span>
              <span>
                Это обычный текст, а это &lt;i&gt;<i>жирный</i>&lt;/i&gt; текст.
              </span>
              <span className={classes.tegMaim}>&lt;/p&gt;</span>
            </li>
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 5</h1>
          <p>Проверьте работу тега &lt;i&gt; на вашей странице.</p>
        </Box>

        <h1>Замечания</h1>
        <p>
          Обратите внимание на то, что теги &lt;b&gt; и &lt;i&gt; следует
          использовать внутри какого-либо другого тега, например абзаца. В этом
          случае абзацы создают общую структуру страницы (абзацы и заголовки), а
          указанные теги делают жирным или курсивом отдельные кусочки текста.
        </p>

        <Box className={classes.footer}>
          <Link to="/html/2">
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

export default React.memo(PageHTML3);
