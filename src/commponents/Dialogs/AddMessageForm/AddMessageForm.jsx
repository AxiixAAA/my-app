import { Textarea } from "../../Common/FormsControls/FormsControls";
import { Field, reduxForm } from "redux-form";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({

    AddMessageForm:{ 
        '& > * button':{
            width: '100%',
            paddingBottom: '5px',
            fontFamily: 'monospace',
            fontSize: '15px',
            cursor: 'pointer',
            boxShadow: '0px 0px 2px wheat',
            border: 'none',
            backgroundColor: '#1F1F1F',
            color: '#848484',
        },
        '& > * button:hover':{
            color: 'white',
            boxShadow: '0px 0px 2px rgb(252, 242, 223)',
        },
        '& > * textarea': {
            border: 'none',
            boxShadow: '0px 0px 2px wheat',
            backgroundColor: '#2B2B2B',
            color: '#EBEBEB',
            width: '785px',
            borderRadius: '0px',
            outline:'none',
            resize: 'none',
            fontSize: '14px',
            height: '24px',
            lineHeight: '24px',
            fontFamily: 'monospace',
        }
    }

}));

const AddMessageForm = (props) => {
const classes = useStyles();   

    return(
        <div className={classes.AddMessageForm}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field 
                        component={Textarea} 
                        name="newMessageBody"
                        placeholder="Enter your message" 
                    />
                </div>
                <div> <button>отправить</button> </div>
            </form>
        </div>
    )
}
  
export const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
  