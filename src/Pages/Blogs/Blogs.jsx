import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import Pdf from "react-to-pdf";
const ref = React.createRef();

const Blogs = () => {
    return (
        <section>
            <article>
                <Pdf targetRef={ref} filename="blogs.pdf">
                    {({ toPdf }) => <button onClick={toPdf} className='mx-auto text-center flex justify-center items-center gap-2 text-white bg-green-600 hover:bg-green-500 duration-500 py-2 px-5 rounded-md my-5'><FaFileDownload /> Download PDF</button>}
                </Pdf>
            </article>
            <article className="space-y-5" ref={ref}>
                {/* Question 01 */}
                <div className="collapse collapse-arrow bg-gray-100 text-gray-700 rounded-lg" >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg">
                        The differences between uncontrolled and controlled components.
                    </div>
                    <div className="collapse-content text-gray-500">
                        <p>The differences between controlled and uncontrolled components are as follows: Controlled components mean that they will change/control by react instead of change/control by the DOM. And the uncontrolled components mean that they will change/control by React. In uncontrolled components, we can do whatever we want to do with the component.</p>
                    </div>
                </div>
                {/* Question 02 */}
                <div className="collapse collapse-arrow bg-gray-100 text-gray-700 rounded-lg">
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg">
                        How to validate React props using PropTypes?
                    </div>
                    <div className="collapse-content text-gray-500">
                        <p>PropTypes is a library in React that allows us to validate the type and shape of the props being passed to a component. By using PropTypes, we can ensure that the component receives the correct data and prevent runtime errors. To use PropTypes, we first need to import it from the 'prop-types' package. Once we have done that, you can define the PropTypes for each prop that your component expects.</p>
                    </div>
                </div>
                {/* Question 03 */}
                <div className="collapse collapse-arrow bg-gray-100 text-gray-700 rounded-lg" >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg">
                        What is the differences between Nodejs and Express js.
                    </div>
                    <div className="collapse-content text-gray-500">
                        <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, and is often used for building server-side applications. Express.js, on the other hand, is a web application framework built on top of Node.js that provides a set of tools and features for building web applications.</p>
                    </div>
                </div>
                {/* Question 04 */}
                <div className="collapse collapse-arrow bg-gray-100 text-gray-700 rounded-lg" >
                    <input type="checkbox" className="peer" />
                    <div className="collapse-title text-lg">
                        What is a custom hook, and why will we create a custom hook?
                    </div>
                    <div className="collapse-content text-gray-500">
                        <p>
                            A custom hook is a reusable function in React that encapsulates a certain piece of logic or functionality, allowing it to be shared across multiple components. We create custom hooks to share common functionality across multiple components. For example, a custom hook could be used to handle state management, data fetching, or any other behavior that needs to be shared across multiple components. Custom hooks allow us to write cleaner and more reusable code, and can help to reduce the amount of duplicated code in an application.</p>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Blogs;