import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import { FilterType } from "../../../redux/user-reducer"


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
    // Настройка кнопки
    const submit = (values:FilterType, {setSubmitting}: {setSubmitting:(isSubmitting:boolean) => void}) => {
        props.onFilterChenged(values)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{ term: ''}}
            validate={usersSearchFormValidate}
            onSubmit={submit}
    >
       {({ isSubmitting }) => (
            <Form>
                <Field type="text" name="term" />    
                <button type="submit" disabled={isSubmitting}>
                Submit
                </button>
            </Form>
         
       )}
     </Formik>
    </div>
})
export default UsersSearchForm
