import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='mt-16 md:mx-10 lg:mx-20 bg-slate-800 p-4 mb-8'>
                <p className='break-normal text-3xl text-left font-semibold text-orange-400'>What is the purpose of React Router?</p>
                <p className='break-normal text-2xl text-left font-semibold text-yellow-400'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. It is used to make an ui single page. It helps to load many pages and data in a single page. It allows to change component without changing webpages.</p>
            </div>
            <div className='md:mx-10 lg:mx-20 bg-slate-800 p-4 mb-8'>
                <p className='break-normal text-3xl text-left font-semibold text-orange-400'>How does context api work?</p>
                <p className='break-normal text-2xl text-left font-semibold text-yellow-400'>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
            </div>
            <div className='mb-20 md:mx-10 lg:mx-20 bg-slate-800 p-4'>
                <p className='break-normal text-3xl text-left font-semibold text-orange-400'>React hook: <span className='text-red-500'>useRef()</span></p>
                <p className='break-normal text-2xl text-left font-semibold text-yellow-400'>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly. Does Not Cause Re-rendersIf we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. To avoid this, we can use the useRef Hook. useRef() only returns one item. It returns an Object called current. When we initialize useRef we set the initial value: useRef(0). It's like doing this: const count = current: 0. We can access the count by using count.current.</p>
            </div>
        </div>
    );
};

export default Blogs;