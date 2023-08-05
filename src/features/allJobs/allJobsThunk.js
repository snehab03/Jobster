import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

export const getAllJobsThunk = async (_, thunkAPI) => {
    const {page,search,searchStatus,searchType,sort}=thunkAPI.getState().allJobs;
    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const resp = await customFetch.get(url);
      return resp.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('There was a error');
    }
  }

export const showStatsThunk =async (_, thunkAPI) => {
    let url = `/jobs/stats`;

    try {
      const resp = await customFetch.get('/jobs/stats');
      console.log(resp.data)
      return resp.data;
    } catch (error) {
      return checkForUnauthorizedResponse(error,thunkAPI);
    }
  }