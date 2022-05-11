import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { TNews } from "../../api/newsAPI";


import { NewsCategories } from "./NewsCategories/NewsCategories";
import newsImage from "../../assets/images/news.png";
import styles from "./News.module.css";
import { UpButton } from "../../commponents/Common/UpButton/UpButton";
import { actionCreators } from "../../redux/reducers/newsReducer";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles:any = makeStyles((theme:any) => ({
    newsSection:{
        borderRadius: '20px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.palette.boxShadow,
    },
    link: {
        margin: '0',
        padding: '10px',
        color: 'var(--font-grey)',
        // backgroundColor: 'var(--bg-content)',
        borderRadius: '3px',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'flex-start',

        '& :hover':{
            backgroundColor: theme.palette.background.backgroundHover
        },
    }
}));
const News: FC<TProps> = ({ news, hasContent, getContent }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const scrollHandler = (e: any ) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            dispatch(actionCreators.setScrollFetching(true))
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const showContent = (content: string) => {
        return (
            <p>{content}</p>
        )
    }

    const toggleContent = (id: string, content: string, text: string) => {
        return (
            <>
                <span className={styles.contentSpan} onClick={(event) => {
                    event.preventDefault();
                    getContent(id)
                }}>{text}</span>
                {showContent(content)}
            </>
        )
    }

    return (
        <>
            <section className={classes.newsSection}>
                <NewsCategories />
                {news.map(item => {
                    return (
                        <Link key={item.link} to={item.link} className={styles.link} target='_blank' rel='noreferrer'>
                            {item.image_url !== null
                            ? <img src={item.image_url} alt="news" className={styles.img} />
                            : <img src={newsImage} alt="news" className={styles.imgPlug} />}
                            <div className={styles.textDiv}>
                                <p className={styles.phrase}>{item.title}</p>
                                <span className={styles.calendarData}>{item.pubDate.slice(0, item.pubDate.length - 3)}</span>
                                <div className={styles.content}>
                                    
                                    {item.description !== null && (!hasContent.includes(item.link)
                                        ? toggleContent(item.link, '', 'Показать')
                                        : toggleContent(item.link, item.description, 'Убрать'))}
                                        
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
            <UpButton />
        </>)
}

export default News;


type TProps = {
    news: TNews[]
    hasContent: string[]
    getContent: (id: string) => void
}