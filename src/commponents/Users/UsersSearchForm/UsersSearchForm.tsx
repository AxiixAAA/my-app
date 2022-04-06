import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterType } from "../../../redux/user-reducer"
import { getUsersFilter } from '../../../redux/users-selectors';
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

type Theme = {
    palette : any
}
const useStyles = makeStyles((theme: Theme) => ({
SearchText:{
    boxShadow: theme.palette.boxShadow,
    '& > * input': {
        color: theme.palette.text.search,
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        paddingLeft: '15px',
        margin: '1px 0px 0px 0px',
        lineHeight: '220%',
        fontSize: '1em',
        boxSizing: 'border-box',
        border: 'none',
        borderRadius: '20px',
        resize: 'none',
        outline: 'none',
    },
    '& > * button':{
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.search,
        border: 'none',
        width: '100%',
        height: '100%',
        cursor: 'pointer',

    }
    
}
    
}));


// Валидация
const usersSearchFormValidate = (values:any) => {
    const errors = {}
    return errors
}

type PropsType = {
    onFilterChenged: (filter:FilterType) => void
}

// Поисковик на странице пользователей
const UsersSearchForm: React.FC<PropsType> = React.memo((props) => {
const classes = useStyles();   

    const filter = useSelector(getUsersFilter)

    // Настройка кнопки
    const submit = (values:FilterType, {setSubmitting}: {setSubmitting:(isSubmitting:boolean) => void}) => {
        props.onFilterChenged(values)
        setSubmitting(false)
    }
    return <div>
        <Formik
            enableReinitialize
            initialValues={{ term: filter.term, friend: filter.friend  }}
            validate={usersSearchFormValidate}
            onSubmit={submit}
        >
       {({ isSubmitting }) => (
            <Form>
                <Grid container className={classes.SearchText}>
                    <Grid item xs={11}>
                        <Box><Field type="text" name="term" placeholder="Поиск..." /></Box>   
                    </Grid>
                    <Grid item xs={1}>
                        <button type="submit" disabled={isSubmitting}>
                            <SearchIcon />
                        </button>
                    </Grid>
                </Grid>
                {/* Renders an HTML <select> */}
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                
            </Form>
         
       )}
     </Formik>
    </div>
})
export default UsersSearchForm
