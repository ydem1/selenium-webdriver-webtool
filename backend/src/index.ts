import express from 'express';
import cors from 'cors';
import { testForm } from './test/test-form.js';
import { Input } from './types/input.js';
import { AllRules } from './types/rule.js';
import { testRule } from './test/test-rule.js';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Url
let storedUrl = "";

app.post('/post-url', (req, res) => {
  const { url } = req.body;

  storedUrl = url;

  console.log('Url saved:', url);
  res.send('Url saved successfully');
});

app.get('/get-url', (req, res) => {
  res.json(storedUrl);
  console.log('Url get:', storedUrl);
});


// Inputs
let storedInputs: Input[] = [];

app.post('/post-input', (req, res) => {
  const data: Input = req.body;
  storedInputs.push(data);

  console.log('Input saved:', data);
  res.send('Input saved successfully');
});

app.get('/get-inputs', (req, res) => {
  res.json(storedInputs);
  console.log('Inputs get:', storedInputs);
});

app.delete('/delete-input/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = storedInputs.findIndex(input => input.id === id);

  if (index !== -1) {
    storedInputs.splice(index, 1);
    console.log('Input deleted:', id);
    res.send(`Input with id ${id} deleted successfully`);
  } else {
    console.log(`Input with id ${id} not found`);
    res.status(404).send(`Input with id ${id} not found`);
  }
});

app.put('/update-input/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedInput: Input = req.body;

  const index = storedInputs.findIndex(input => input.id === id);

  if (index !== -1) {
    storedInputs[index] = updatedInput;
    console.log('Input updated:', id, updatedInput);
    res.send(`Input with id ${id} updated successfully`);
  } else {
    console.log(`Input with id ${id} not found`);
    res.status(404).send(`Input with id ${id} not found`);
  }
});

// submit button
let storedSubmitBtn: Input = {
  id: 0,
  name: '',
  selector: '',
};

app.post('/post-submitBtn', (req, res) => {
  const data: Input = req.body;

  storedSubmitBtn = data;

  console.log('Submit button saved:', storedSubmitBtn);
  res.send('Submit button saved successfully');
});

app.get('/get-submitBtn', (req, res) => {
  res.json(storedSubmitBtn);
  console.log('Submit button get:', storedSubmitBtn);
});

// Array rules
let storedRules: AllRules[] = [];

app.post('/post-rule', (req, res) => {
  const data: AllRules = req.body;
  storedRules.push(data);

  console.log('Rule saved:', data);
  res.send('Rule saved successfully');
});

app.get('/get-rules', (req, res) => {
  res.json(storedRules);
  console.log('Rules get:', storedRules);
});

app.delete('/delete-rules/:id', (req, res) => {
  const id = parseInt(req.params.id);

  const index = storedRules.findIndex(input => input.id === id);

  if (index !== -1) {
    storedRules.splice(index, 1);
    console.log('Rule deleted:', id);
    res.send(`Rule with id ${id} deleted successfully`);
  } else {
    console.log(`Rule with id ${id} not found`);
    res.status(404).send(`Rule with id ${id} not found`);
  }
});

// app.put('/update-input/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const updatedInput: Input = req.body;

//   const index = storedInputs.findIndex(input => input.id === id);

//   if (index !== -1) {
//     storedInputs[index] = updatedInput;
//     console.log('Input updated:', id, updatedInput);
//     res.send(`Input with id ${id} updated successfully`);
//   } else {
//     console.log(`Input with id ${id} not found`);
//     res.status(404).send(`Input with id ${id} not found`);
//   }
// });


// test form
app.post('/test-form', async (req, res) => {
  try {
    await testForm(storedUrl, storedInputs, storedSubmitBtn)

    console.log(`
      testForm run with url: ${storedUrl} 
      and Inputs: ${storedInputs.map(input => input.name)}
      and Submit Button ${storedSubmitBtn.name}
      `);

    res.send('Page is accessible');
  } catch (error) {
    res.status(500).send('Page is not accessible');
  }
});

// test rule
app.post('/test-rule', async (req, res) => {
  const { id } = req.body;

  const ruleId = parseInt(id);

  const currentRule = storedRules.find(rule => rule.id === ruleId).rule;

  if (!currentRule) {
    return res.status(404).send('Rule not found');
  }

  try {
    await testRule(storedUrl, currentRule);

    console.log(`
      testRule run with url: ${storedUrl} 
      and Inputs: ${currentRule.map(input => input.name)}
    `);

    res.send('Page is accessible');
  } catch (error) {
    res.status(500).send('Page is not accessible');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
