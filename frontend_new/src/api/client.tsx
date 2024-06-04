import axios from "axios";
import { API } from "./url-api";
import { InputElement } from "src/@types/inputElement";
import { UrlObj } from "src/@types/url";
import { AllRules, Rule } from "src/@types/rule";

function wait(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

async function getData<T>(url: string): Promise<T> {
  await wait(1500);

  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
}

async function postData<T>(url: string, data?: T): Promise<void> {
  try {
    await axios.post(url, data);
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
    throw error;
  }
}

async function putData<T>(url: string, data: T): Promise<void> {
  try {
    await axios.put(url, data);
  } catch (error) {
    console.error(`Error updating input with id ${url}:`, error);
    throw error;
  }
}

export async function getInputElementsFromServer(): Promise<Rule> {
  return getData<Rule>(API.GET_INPUTS);
}

export async function postInputElement(newInputElement: InputElement): Promise<void> {
  await postData<InputElement>(API.POST_INPUT, newInputElement);
}

export async function updateInputElementToServer(id: number, updatedInputElement: InputElement): Promise<void> {
  await putData<InputElement>(`${API.UPDATE_INPUT}/${id}`, updatedInputElement);
}

export async function deleteInputElement(id: number): Promise<void> {
  try {
    await axios.delete(`${API.DELETE_INPUT}/${id}`);
  } catch (error) {
    console.error(`Error deleting input with id ${id}:`, error);
    throw error;
  }
}

export async function getUrlFromServer(): Promise<string> {
  return getData<string>(API.GET_URL);
}

export async function postUrlToServer(newUrl: UrlObj): Promise<void> {
  await postData<UrlObj>(API.POST_URL, newUrl);
}

export async function getSubmitBtnFromServer(): Promise<InputElement> {
  return getData<InputElement>(API.GET_SUBMIT_BTN);
}

export async function postSubmitBtnToServer(submitBtn: InputElement): Promise<void> {
  await postData<InputElement>(API.POST_SUBMIT_BTN, submitBtn);
}

export async function getAllRulesFromServer(): Promise<AllRules[]> {
  return getData<AllRules[]>(API.GET_RULES);
}

export async function postRule(newRule: AllRules): Promise<void> {
  await postData<AllRules>(API.POST_RULE, newRule);
}

export async function deleteRule(id: number): Promise<void> {
  try {
    await axios.delete(`${API.DELETE_RULE}/${id}`);
  } catch (error) {
    console.error(`Error deleting input with id ${id}:`, error);
    throw error;
  }
}

export async function testForm(): Promise<void> {
  await postData(API.TEST_FORM);
}

interface FiledId {
  id: number;
}

export async function testRule(filedId: FiledId): Promise<void> {
  await postData(API.TEST_RULE, filedId);
}

