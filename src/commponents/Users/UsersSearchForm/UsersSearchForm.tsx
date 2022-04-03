import { Formik, Form, Field } from 'formik';
import React from 'react';
import { useSelector } from 'react-redux';
import { FilterType } from "../../../redux/user-reducer"
import { getUsersFilter } from '../../../redux/users-selectors';

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
                <Field type="text" name="term" />    
                {/* Renders an HTML <select> */}
                    <Field name="friend" as="select">
                        <option value="null">All</option>
                        <option value="true">Only followed</option>
                        <option value="false">Only unfollowed</option>
                    </Field>
                <button type="submit" disabled={isSubmitting}>
                Submit
                </button>
            </Form>
         
       )}
     </Formik>
    </div>
})
export default UsersSearchForm
