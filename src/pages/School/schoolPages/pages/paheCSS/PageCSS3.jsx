import { Box } from "@mui/material";
import React from "react";
import { UpButton } from "../../../../../commponents/Common/UpButton/UpButton";
import { usePageStyles } from "../style";
import { Link } from "react-router-dom";

const PageCSS3 = () => {
  const classes = usePageStyles();
  return (
    <>
      <UpButton />
      <Box className={classes.container}>
        <h1>Ширина и высота элементов на CSS</h1>
        <p>
          Для задания ширины и высоты элементов в CSS предназначены свойства{" "}
          <i>width</i> и <i>height</i>. Значения этих свойств, как правило,
          задаются в пикселях. Пиксели обозначаются как <i>px</i> и добавляются
          к числу. Например, чтобы задать размер в 100 пикселей, значением
          свойства следует указать следующее: 100px.
        </p>
        <p>
          Посмотрим на работу этих свойств на примере. Зададим ячейкам
          какой-нибудь таблицы ширину в 200px и высоту 100px:
        </p>
        <Box className={classes.blockCode}>
          <ol>
            <li>
              <span className={classes.tegMaim}>&lt;table</span>
              <span className={classes.tegSupport}>  border</span>
              <span>="1"</span>
              <span className={classes.tegMaim}>&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>    &lt;tr&gt;</span>
            </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>1</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>2</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>3</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>    &lt;tr&gt;</span>
            </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>4</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>5</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>6</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
            </li>

            <li>
              <span className={classes.tegMaim}>    &lt;tr&gt;</span>
            </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>7</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>8</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
                <li>
                    <span className={classes.tegMaim}>        &lt;td&gt;</span>
                    <span>9</span>
                    <span className={classes.tegMaim}>&lt;/td&gt;</span>
                </li>
            <li>
              <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
            </li>
            <li>
              <span className={classes.tegMaim}>&lt;/table&gt;</span>
            </li>
          </ol>
        </Box>

        <p>Результат выполнения кода:</p>

        <Box className={classes.blockResaltCode}>
        <table border="1" >
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
                <td>5</td>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
                <td>8</td>
                <td>9</td>
            </tr>
        </table>
        </Box>

        <Box className={classes.blockTask}>
          <h1>Задача 1</h1>
          <p>Сделайте в HTML коде абзацы с длинным текстом. Средствами CSS поставьте всем абзацам ширину 300px.</p>
        </Box>
            <Box className={classes.blockTask}>
            <h1>Задача 2</h1>
            <p>Дана следующая таблица:</p>
            <Box className={classes.blockCode}>
            <ol>
                <li>
                <span className={classes.tegMaim}>&lt;table</span>
                <span className={classes.tegSupport}>  border</span>
                <span>="1"</span>
                <span className={classes.tegMaim}>&gt;</span>
                </li>
                <li>
                <span className={classes.tegMaim}>    &lt;tr&gt;</span>
                </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Иван</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Иванов</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>200$</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                <li>
                <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
                </li>

                <li>
                <span className={classes.tegMaim}>    &lt;tr&gt;</span>
                </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Николай</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Петров</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>300$</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                <li>
                <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
                </li>

                <li>
                <span className={classes.tegMaim}>    &lt;tr&gt;</span>
                </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Владимир</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>Сидоров</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                    <li>
                        <span className={classes.tegMaim}>        &lt;td&gt;</span>
                        <span>400$</span>
                        <span className={classes.tegMaim}>&lt;/td&gt;</span>
                    </li>
                <li>
                <span className={classes.tegMaim}>    &lt;/tr&gt;</span>
                </li>
                <li>
                <span className={classes.tegMaim}>&lt;/table&gt;</span>
                </li>
            </ol>
            </Box>
            <p>Установите ячейкам этой таблицы ширину в 400px и высоту в 300px.</p>
        </Box>
        

        <Box className={classes.footer}>
          <Link to="/css/2">
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

export default React.memo(PageCSS3);
