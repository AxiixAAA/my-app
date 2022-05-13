import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageCSS1 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Основы работы с языком CSS</h1>
        <p>
          Мы с вами уже разобрали основные теги языка HTML и теперь пришло время
          навести красоту. Хотелось бы иметь возможность менять цвет текста, его
          размер, фон и многое другое. Это делается с помощью языка CSS.
        </p>
        <p>
          Как правило, CSS команды (стили) хранятся в отдельном файле, который
          подключается специальным тегом ко всем HTML страницам нашего сайта.
        </p>
        <p>
          Преимущество такого подхода в том, что CSS файл один, а HTML файлов
          может быть любое количество, хоть тысяча. Если мы сделаем изменение в
          одном месте CSS файла, например, покрасим все абзацы в красный цвет,
          то эти изменения применятся на всей тысяче HTML страниц, к которым
          подключен наш CSS файл. Очень удобно и быстро.
        </p>
        <p>
          Файл со стилями должен иметь расширение .css. Чтобы подключить такой
          файл к HTML странице, в теге head следует написать такую конструкцию:
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
              <span className={classes.tegMaim}>&lt;htm&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;header&gt;</span>
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
              <span className={classes.tegMaim}>    &lt;/header&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;body&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>        &lt;p&gt;</span>
            </li>
            <li>
              <span>            Это абзац с текстом.</span>
            </li>
            <li>
              <span className={classes.tegMaim}>        &lt;/p&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/body&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/htm&gt;</span>
            </li>
          </ol>
        </Box>
        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>
            Создайте и подключите ко всем вашим страницам файл styles.css.
          </p>
        </Box>
        <h1>Как работать с CSS</h1>
        <p>
        Каждому тегу в HTML соответствует так называемый <i>селектор</i> CSS. К примеру, тегу &lt;p&gt; соответствует CSS селектор p, с помощью которого мы можем обратиться ко всем абзацам HTML страницы и, например, покрасить их всех одновременно в красный цвет.
        </p>
        <p>
        После селектора следует ставить фигурные скобки, внутри которых следует писать CSS <i>свойства</i>. Свойства и задают цвет, размер шрифта и другие интересные вещи. Их следует писать в таком формате: имя свойства, потом двоеточие, потом значение этого свойства (например, свойство - это цвет, а "красный" - это значение). Потом нужно поставить точку с запятой и можно писать следующее свойство.
        </p>
        <p>Давайте, например, покрасим все абзацы в красный цвет:</p>

        <Box className={classes.blockCode}>
          <ol>
            <li>
                <span className={classes.tegMaim}>p </span>
                <span>{`{`}</span>
            </li>
            <li>
                <span className={classes.tegSupport}>    color</span>
                <span>: red;</span>
            </li>
            <li>
                <span>{`}`}</span>
            </li>
           
          </ol>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 2</h1>
          <p>
          В вашем файле styles.css разместите код, красящий абзацы в красный цвет. Откройте страницы вашего сайта в браузере и убедитесь в том, что все абзацы стали красными.
          </p>
        </Box>
        <h1>Другие значения для цвета</h1>
        <p>
        Помимо ключевого слова <i>red</i>, задающего красный, можно использовать и другие английские слова для цвета, например, <i>green</i> - зеленый, <i>blue</i> - голубой, <i>yellow</i> - желтый, <i>orange</i> - оранжевый, <i>black</i> - черный, <i>white</i> - белый.
        </p>
        <Box className={classes.blockTask}>
          <h1>Задача 3</h1>
          <p>
          Используя соответствующие селекторы покрасьте заголовки h1 в зеленый цвет, заголовки h2 в голубой, заголовки h3 - в красный, а абзацы - в оранжевый.
          </p>
        </Box>

        <Box className={classes.footer}>
          {/* <Box className={classes.footerArrow}></Box> */}
          <Link to="/css/2">
            <Box className={classes.footerArrow}>→</Box>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default React.memo(PageCSS1);
