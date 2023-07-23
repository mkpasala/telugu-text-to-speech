import React from "react";

const Home = () => {
    return (<>
        <section className="h-screen bg-gray-100/50 mt-6">
            <form className="container max-w-2xl mx-auto shadow-md md:w-3/4">

                <div className="w-full max-w-2xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                        Text to Speech Telugu
                    </div>
                    <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        
                        <div className="col-span-2">
                            <label className="text-gray-700" for="name">
                                <textarea className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="speech-text" placeholder="Enter your text" name="speech-text" rows="5" cols="40">
                                </textarea>
                            </label>
                        </div>
                        <div className="col-span-2 text-right">
                            <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Speech
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    </>)
}

export default Home;