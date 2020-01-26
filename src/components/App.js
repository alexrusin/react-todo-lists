import React from 'react';
import { Link } from 'react-router-dom';

const cardImageStyle = {
  backgroundImage: 'url(\'https://source.unsplash.com/94Ld_MtIUf0/600x800\')'
};

const App = () => {
  return (
    <>
    <div className="container mx-auto">
        <div className="flex justify-center px-6 my-12">
         
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
           
            <div
              className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={cardImageStyle}
            ></div>
           
            <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
              <div className="px-8 mb-4 text-center">
                <h3 className="pt-4 mb-2 text-2xl">A simple to-do list app that meets your needs</h3>
                <p className="mb-4 text-lg text-gray-700">
                Make your to-do list as simple or detailed as you need. Then, tie the work back to larger projects, loop in teammates, and make sure nothing falls through the cracks.
                </p>
              </div>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-6 text-center">
               
                <Link
                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    to="/register"
                >
                    Get Started
                </Link>
              
                 
                </div>
                <hr className="mb-6 border-t" />
                <div className="text-center">
               
                  <Link to="/login"
                    className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </Link>
                
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
    </>
  )
}

export default App;
