import React from 'react';
import { FormPage } from './FormPage';
import { PAGE_DATA } from './data.js';
import { SuccessPage, submitForm } from './utilities';

export const MultiStepForm = () => {
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const [isFormSubmitted, setIsFormSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    dob: '',
    password: '',
  });

  const handleFormDataChange = (id, newValue) => {
    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  const isLastPage = currentPageIndex === PAGE_DATA.length - 1;

  const handleSubmit = () => {
    if (isLastPage) {
      submitForm(formData).then(() => {
        setIsFormSubmitted(true);
      });
    } else {
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const goBack = () => {
    if (currentPageIndex === 0) {
      return;
    }
    setCurrentPageIndex(currentPageIndex - 1);
  };

  const pageData = PAGE_DATA[currentPageIndex];

  return (
    <>
      {isFormSubmitted && <SuccessPage />}
      {!isFormSubmitted && (
        <FormPage
          submitText={isLastPage ? 'Submit' : 'Next'}
          onSubmit={handleSubmit}
          onChange={handleFormDataChange}
          goBack={currentPageIndex > 0 ? goBack : null}
          inputValue={formData[pageData.id]}
          pageData={pageData}
        />
      )}
    </>
  );
};
