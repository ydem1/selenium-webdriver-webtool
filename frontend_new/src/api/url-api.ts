const BASE_URL = 'http://localhost:5000';

export const API = {
  GET_INPUTS: `${BASE_URL}/get-inputs`,
  POST_INPUT: `${BASE_URL}/post-input`,
  DELETE_INPUT: `${BASE_URL}/delete-input`,
  UPDATE_INPUT: `${BASE_URL}/update-input`,

  GET_RULES: `${BASE_URL}/get-rules`,
  POST_RULE: `${BASE_URL}/post-rule`,
  DELETE_RULE: `${BASE_URL}/delete-rule`,
  // UPDATE_RULE: `${BASE_URL}/update-rule`,

  GET_SUBMIT_BTN: `${BASE_URL}/get-submitBtn`,
  POST_SUBMIT_BTN: `${BASE_URL}/post-submitBtn`,

  GET_URL: `${BASE_URL}/get-url`,
  POST_URL: `${BASE_URL}/post-url`,

  TEST_FORM: `${BASE_URL}/test-form`,
  TEST_RULE: `${BASE_URL}/test-rule`,
}