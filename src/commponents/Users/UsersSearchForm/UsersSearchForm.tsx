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
    boxShadow: theme.palette.boxShadowSearch,
    borderRadius: "20px",

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
        borderRadius: '20px',
    }
    
},

usersNuvbar:{
    '& > button':{
        display: 'inline-block',
        verticalAlign: 'top',
        overflow: 'hidden',
        border: 'none',
        backgroundColor: 'black',

    },
    '& > button ::selection':{
        backgroundColor: 'red'
    },
    '& > * select':{
        backgroundColor: 'black',
        padding: '20px',
        margin: '-5px -25px -5px -5px',
        color: 'green',
        cursor: 'pointer',
        outline: 'none',
        border: 'none',
    },
    '& > * select ::selection':{
        backgroundColor: 'red'
    },
    '& > * option':{
        color: 'green',
        backgroundColor: 'black',
        outline: 'none',
        border: 'none',
    },
    '& > * option ::selection':{
        backgroundColor: 'red'
    },
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
                        <Box><Field type="text" name="term" placeholder="Поиск..." autocomplete="off"/></Box>   
                    </Grid>
                    <Grid item xs={1}>
                        <button type="submit" disabled={isSubmitting}>
                            <SearchIcon />
                        </button>
                    </Grid>
                </Grid>
                {/* <button>
                    <Field name="friend" as="select" multiple={true}>
                        // {/* <option value="null">All</option> */}
                        {/* <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option> */}
                    {/* </Field> */}
                {/* </button>   */}
                {/* <Box className={classes.usersNuvbar}>
                    <button >
                        <Field name="friend" as="select" size="1" multiple={true}>
                            <option value="true">Мои друзья</option>
                        </Field> 
                    </button>
                    <button >
                        <Field name="friend" as="select" size="1" multiple={true}>
                            <option value="false">Поиск друзей</option>
                        </Field> 
                    </button>
                </Box> */}
            </Form>
         
       )}
     </Formik>
    </div>
})
export default UsersSearchForm
