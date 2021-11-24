import React from "react";
import s from "./Paginator.module.css";

let Paginator = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {

    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) {pages.push(i)}

    return <div>
        {/* Список пользователей */}
        <div className={s.spisok}>
            {pages.map((p) => {
                return <span className={currentPage === p && s.selectedPage }
                onClick={() => {onPageChanged(p); }}>{p}</span>})}
        </div>
    </div>
}

export default Paginator