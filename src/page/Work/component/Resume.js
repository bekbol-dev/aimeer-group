import React from 'react';
import Container from "../../../ui/Container";
import {Formik} from 'formik'
import * as yup from 'yup'
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import {useDispatch, useSelector} from "react-redux";
import {sendResume} from "../ResumeReducer/resumeActions";

const Resume = () => {
  const {isError, isLoading} = useSelector(state => state.ResumeReducer)
  const dispatch = useDispatch()
  const validationSchema = yup.object().shape({
    full_name: yup.string().required('Обязательно'),
    phone_number: yup.number().typeError("Должно быть числом").required('Обязательно'),
    position: yup.string().required('Обязательно'),
    text: yup.string().required('Обязательно'),
  })

  const postFormData = (data) => {
    dispatch(sendResume(data))
  }

  return (
    <div id='resume'>
      <Container>
        <Formik
          initialValues={{
            full_name: '', phone_number: '',position: '', text: '',
          }}
          validateOnBlur
          onSubmit={postFormData}
          validationSchema={validationSchema}
        >
          {({values, handleBlur, handleChange, isValid, handleSubmit, errors, touched, dirty}) => (
            <div className="resume">
              <h1>Отправить резюме</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lectus massa, scelerisque at dignissim</p>
              <div className='resume--params'>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.full_name}
                  type='text' name='full_name'
                  placeholder='ФИО'
                />
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone_number}
                  type='tel' name='phone_number'
                  placeholder='Ваш телефон'
                />
              </div>
              <div className='resume--params'>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.position}
                  type='text' name='position'
                  placeholder='Позиция (опционально)'
                />
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.text}
                  type='text' name='text'
                  placeholder='Ваше сообщение'
                />
              </div>
              <div className='resume--params'>
                <Button fontSize={20}>Прикрепить резюме</Button>
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
                  {isLoading? 'Loading...': 'Отправить форму'}
                </button>
              </div>
            </div>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default Resume;