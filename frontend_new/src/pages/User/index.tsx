import React from 'react';
import { Sidebar } from 'src/page-components/user/Sidebar';
import { Outlet, useLocation } from 'react-router-dom';
import { PATHNAMES } from 'src/constants/routes';
import { PageWindow } from 'src/components/PageWindow';

const User: React.FC = () => {
  const { pathname } = useLocation();
  const isInstructionVisible = PATHNAMES.USER === pathname;

  return (
    <section className="container py-25">
      <h2 className="text-5xl">User Page</h2>

      <div className="flex gap-5 mt-10">
        <Sidebar />
        {isInstructionVisible ? (
          <PageWindow>
            <h3>
              How to Use App for Testing
            </h3>

            <div className='flex flex-col gap-4 bg-white-base rounded-20 p-5 mt-5'>
              <p>1. Set the URL: Start by setting the URL of the website you want to work with. This is the webpage where you'll be conducting your testing.</p>
              <p>2. Add Test Rules: Add one or more test rules to the selector field. You can find the XPathFull of the element by inspecting the webpage. Press F12 to open the developer tools, then find the element you want to test. Right-click on it and select "Copy as XPathFull". Paste this XPathFull into the selector field of your app.</p>
              <p>3. Name Field: Make sure to fill in the name field. This helps identify the test rule on your interface.</p>
              <p>4. Value Field (for Input Elements): If the element you're testing is an input field, you'll also need to provide a value. This is the text that will be inserted into the input field during testing. Note that this field is not needed for buttons or other non-input elements.</p>
            </div>

            <p>
              By following these steps, you can effectively use my app to test various elements on a webpage and ensure they function as expected.
            </p>
          </PageWindow>
        ) : (
          <Outlet />
        )}
      </div>
    </section>
  )
};

export default User;
