import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { TOpponent } from "../../../api/dialogs";
import { sendMessage } from "../../../redux/dialogs-reducer";
import styles from "./InputField.module.css";

const useStyles: any = makeStyles((theme: any) => ({
    footerMessages: {
        height: "50px",
        width: "100%",
        background: theme.palette.background.paper,
        marginBottom: "15px",
        borderRadius: "8px 8px 8px 8px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        margin: '10px 0px 0px 0px'    
      },
}));

export const InputField: FC<TProps> = ({ currentOpponent }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    return (
        <Formik
            initialValues={{
                textarea: ''
            }}
            onSubmit={(values, { resetForm }) => {
                dispatch(sendMessage(currentOpponent.id, values.textarea))
                resetForm({})
            }}>
            {currentOpponent.id
                ? <Form className={styles.form}>
                    <Field
                        type='textarea'
                        name='textarea'
                        placeholder="Введите сообщение..."
                        className={styles.input} 
                        autocomplete="off"
                    />
                    {/* <button type='submit' className={styles.button}>Отправить</button> */}
                </Form>
                : <Box className={classes.footerMessages} />
            }
        </Formik>
    )
}


type TProps = {
    currentOpponent: TOpponent
}