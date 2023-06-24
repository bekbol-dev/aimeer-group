import React from 'react';
import Container from "../../ui/Container";
import {useDispatch, useSelector} from "react-redux";
import {Formik, ErrorMessage} from 'formik'
import * as yup from 'yup'
import {postFeedback} from "../../store/FeedbackReducer/feedbackActions";
import toast, {Toaster} from "react-hot-toast";

const ApplicationPhone = ({image}) => {
  const {isError, isLoading} = useSelector(state => state.FeedbackReducer)
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    phone_number: yup.number().typeError("Должно быть числом").required('Обязательно'),
    email: yup.string().email("Введите верный email"),
  })

  const postFormData = (data) => {
    dispatch(postFeedback(data, toast))
  }
  return (
    <div id='application'>
      <Container>
        <div className="application">
          <div className='application--items'>
            <h1>Связаться с нами</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim</p>
            <div className='application--items--inputs'>
              <Formik
                initialValues={{
                  phone_number: '', email: '',
                }}
                validateOnBlur
                onSubmit={postFormData}
                validationSchema={validationSchema}
              >
                {({values, handleBlur, handleChange, isValid, handleSubmit, errors, touched, dirty}) => (
                  <div style={{width: '100%'}}>
                    <input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone_number}
                      type='tel' name='phone_number'
                      placeholder='Ваш телефон'/>
                    <div className='error-text'>
                      <ErrorMessage name={'phone_number'}/>
                    </div>
                    <button
                      disabled={!isValid && !dirty}
                      onClick={() => handleSubmit()}
                      type='submit'
                      style={{
                        fontSize: '20px',
                        background: '#2AB057',
                        color: '#FFFFFF',
                      }}
                      className='green-btn'>
                      {isLoading ? 'Loading...' : 'Отправить заявку'}
                    </button>
                  </div>
                )}
              </Formik>
            </div>

          </div>
          <div className='application--image'>
            <img src={image} alt=""/>
          </div>
        </div>
      </Container>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
};

export default ApplicationPhone;