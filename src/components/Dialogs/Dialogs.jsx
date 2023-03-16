import { Message } from "./Message/Message";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import { withAuthRedirectCopy } from "../../hoc/withAuthRedirectCopy";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
function Dialogs(props) {
  console.log(props);
  const initialValues = { message: "" };
  const validationSchema = Yup.object({
    message: Yup.string()
      .typeError("Должно быть строкой")
      .required("This field is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    props.newMessages(values.message);
    resetForm();
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {props.messagePage.dialogsData.map((dialog) => (
          <DialogItem
            key={dialog.id}
            src="https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3"
            id={dialog.id}
            name={dialog.name}
          />
        ))}
      </div>
      <div className={s.messages}>
        {props.messagePage.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="message"
                component="textarea"
                placeholder="enter your message"
              />
              {errors.message && touched.message ? (
                <div className="error-message">{errors.message}</div>
              ) : null}
              <button type="submit">Отправить</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
export default withAuthRedirectCopy(Dialogs);
