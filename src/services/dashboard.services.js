
import httpService from './http.services';
import { errorCatcher } from './errors';


const GetDashboardData = () => httpService
  .get(`/mod/rattend/api/getrows.php?PHPSESSID=ddae2649715c4917534f03d5a7ded0d3&_=1628594177011`)
  .then(({ data }) => data)
  .catch((err) => {
    errorCatcher(err.response.data);
    return Promise.reject(err.response.data);
  });



const GetInstructorData = () => httpService
.get(`/api/settings.php?PHPSESSID=f44918656e017febb34e762c0f85ede0`)
.then(({ data }) => data)
.catch((err) => {
  errorCatcher(err.response.data);
  return Promise.reject(err.response.data);
});

const UpdateSettings = (data) => httpService
.post(`/api/settings.php?PHPSESSID=ddae2649715c4917534f03d5a7ded0d3`,data)
.then(({ data }) => data)
.catch((err) => {
  //errorCatcher(err.response.data);
  // Promise.reject(err.response.data);
});

const RecordAttendance = (data) => httpService
.post(`mod/rattend/api/attend.php?PHPSESSID=3121a545252dc32cf2b7ba7570ceec0d`,data)
.then(({ data }) => data)
.catch((err) => {
  errorCatcher(err.response.data);
   Promise.reject(err.response.data);
});

const ClearData = () => httpService
.post(`mod/rattend/api/getrows.php?PHPSESSID=ddae2649715c4917534f03d5a7ded0d3&_=1628594622264`)
.then(({ data }) => data)
.catch((err) => {
  // errorCatcher(err.response.data);
  // return Promise.reject(err.response.data);
});

export default {GetDashboardData,UpdateSettings,RecordAttendance,GetInstructorData,ClearData};
