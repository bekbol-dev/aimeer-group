import React from 'react';
import {Formik} from 'formik'
import toast, {Toaster} from "react-hot-toast";
import * as yup from 'yup'
import Container from "../../ui/Container";
import {BsTelephoneFill} from "react-icons/bs";
import {MdEmail} from "react-icons/md";
import Input from "../../ui/Input";
import {postFeedback} from "../../store/FeedbackReducer/feedbackActions";
import {useDispatch, useSelector} from "react-redux";

const ApplicationForm = () => {
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
    <div style={{marginTop: '10%'}}>
      <Container>
        <div className='feedback-titles'>
          <h1>Доверьтесь нашей команде,</h1>
          <h2>нас выбирают лучшие</h2>
        </div>
      </Container>
      <div id='feedback'>
        <Container>
          <div className="feedback">
            <div className='feedback-box'>
              <div className='feedback-box--contacts'>
                <h1>Контакты</h1>
                <a href='tel:+996 556 26 30 16'>
                  <span><BsTelephoneFill/></span>
                  <h4>+996 556 26 30 16</h4>
                </a>
                <a href='tel:0550302355'>
                  <span><BsTelephoneFill/></span>
                  <h4>0550302355</h4>
                </a>
                <a href='mailto:limpio.bishkek@gmail.com'>
                  <span><MdEmail/></span>
                  <h4>limpio.bishkek@gmail.com</h4>
                </a>
              </div>
              <Formik
                initialValues={{
                  phone_number: '', email: '',
                }}
                validateOnBlur
                onSubmit={postFormData}
                validationSchema={validationSchema}
              >
                {({values, handleBlur, handleChange, isValid, handleSubmit, errors, touched, dirty}) => (
                  <div className='feedback-box--form'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at
                      dignissim
                      ac, blandit u</p>

                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.phone_number}
                      type='tel' name='phone_number'
                      placeholder={'Ваш телефон'}
                    />
                    <Input
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name='email'
                      type={'email'}
                      placeholder={'Ваш email'}
                    />

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
                      {isLoading? 'Loading...': 'Отправить заявку'}
                    </button>
                    <Toaster
                      position="top-center"
                      reverseOrder={false}
                    />
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ApplicationForm;