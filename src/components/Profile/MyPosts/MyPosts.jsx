import classes from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const MyPosts = (props) => {
  const initialValues = {
    post: "",
  };

  const validationSchema = Yup.object().shape({
    post: Yup.string("this should be a string").required("enter your post"),
  });

  const onSubmit = (values, { resetForm }) => {
    props.addPost(values.post);
    resetForm();
  };

  return (
    <div className={classes.postBlock}>
      <h3>My Posts</h3>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ errors, handleBlur, handleChange, touched }) => {
            return (
              <Form>
                <Field
                  name="post"
                  component="textarea"
                  placeholder="enter your post"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.post && touched.post && <div>{errors.post}</div>}
                <div>
                  <button type="submit">Add Post</button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>

      <div className={classes.post}>
        {props.profilePage.postsData.map((post) => (
          <Posts
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
