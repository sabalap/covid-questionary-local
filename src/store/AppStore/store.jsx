import React, { useCallback, useState } from 'react';
import axios from 'axios';

const Store = React.createContext({
  page: 0,
  employee: null,
  changePageHandler: () => {},
  createEmployee: () => {},
  removeEmployeeObj: () => {},
  submitHandler: () => {},
});

export const StoreProvider = (props) => {
  const [page, setPage] = useState(localStorage.getItem('page') || 0);
  const [employee, setEmployee] = useState(null);

  const changePageHandler = (pageNumber) => {
    setPage(pageNumber);
    localStorage.setItem('page', pageNumber);
  };

  const clearStorage = () => {
    localStorage.removeItem('first_name');
    localStorage.removeItem('last_name');
    localStorage.removeItem('email');
    localStorage.removeItem('had_covid');
    localStorage.removeItem('had_antibody_test');
    localStorage.removeItem('covid_sickness_date');
    localStorage.removeItem('number');
    localStorage.removeItem('test_date');
    localStorage.removeItem('had_vaccine');
    localStorage.removeItem('vaccination_stage');
    localStorage.removeItem('i_am_waiting');
    localStorage.removeItem('non_formal_meetings');
    localStorage.removeItem('number_of_days_from_office');
    localStorage.removeItem('what_about_meetings_in_live');
    localStorage.removeItem('tell_us_your_opinion_about_us');
  };

  const createEmployee = useCallback(() => {
    const firstName = localStorage.getItem('first_name');
    const lastName = localStorage.getItem('last_name');
    const email = localStorage.getItem('email');
    const hadCovid = localStorage.getItem('had_covid');
    const antibodyTest = localStorage.getItem('had_antibody_test');
    const covidSicknessDate = localStorage.getItem('covid_sickness_date');
    const number = localStorage.getItem('number');
    const testDate = localStorage.getItem('test_date');
    const hadVaccine = localStorage.getItem('had_vaccine');
    const vaccinationStage = localStorage.getItem('vaccination_stage');
    const waitingFor = localStorage.getItem('i_am_waiting');
    const nonFormalMeetings = localStorage.getItem('non_formal_meetings');
    const daysFromOffice = localStorage.getItem('number_of_days_from_office');
    const meetingsInLive = localStorage.getItem('what_about_meetings_in_live');
    const opinionAboutUs = localStorage.getItem(
      'tell_us_your_opinion_about_us'
    );

    const employeeObj = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      had_covid: hadCovid,
      had_vaccine: hadVaccine === 'true' ? true : false,
      non_formal_meetings: nonFormalMeetings,
      number_of_days_from_office: +daysFromOffice,
      what_about_meetings_in_live: meetingsInLive !== '' ? meetingsInLive : '',
      tell_us_your_opinion_about_us:
        opinionAboutUs !== '' ? opinionAboutUs : '',
    };
    if (hadCovid === 'yes') {
      employeeObj.had_antibody_test = antibodyTest === 'true' ? true : false;
    }
    if (antibodyTest === 'true') {
      if (testDate && number) {
        employeeObj.antibodies = {
          test_date: testDate,
          number: +number,
        };
      } else if (testDate) {
        employeeObj.antibodies = {
          test_date: testDate,
        };
      } else if (number) {
        employeeObj.antibodies = {
          number: +number,
        };
      } else {
        employeeObj.antibodies = {};
      }
    }
    if (antibodyTest === 'false') {
      employeeObj.covid_sickness_date = covidSicknessDate;
    }
    if (hadVaccine === 'true') {
      employeeObj.vaccination_stage = vaccinationStage;
    }
    if (hadVaccine === 'false') {
      employeeObj.i_am_waiting = waitingFor;
    }
    setEmployee(employeeObj);
  }, []);

  const removeEmployeeObj = () => {
    setEmployee(null);
  };

  const submitHandler = async () => {
    if (employee) {
      const response = await axios.post(
        'https://covid19.devtest.ge/api/create',
        employee,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.statusText === 'Created') {
        setEmployee(null);
        clearStorage();
      } else {
        return;
      }
    } else {
      console.log('error');
      return;
    }
  };

  return (
    <Store.Provider
      value={{
        page: page,
        employee: employee,
        changePageHandler: changePageHandler,
        createEmployee: createEmployee,
        removeEmployeeObj: removeEmployeeObj,
        submitHandler: submitHandler,
      }}
    >
      {props.children}
    </Store.Provider>
  );
};
export default Store;
