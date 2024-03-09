

const Hero = () => {

//   const pink_gradiant = 'bg-gradient-to-r from-pink-300 to-pink-600 filter blur-[900px]'
//   const white_gradiant = 'bg-white bg-opacity-60 filter blur-[750px]'
//   const blue_gradiant = 'bg-gradient-to-t from-transparent via-blue-800 to-transparent filter blur-[123px]'
//   const bg_discount_gradient = 'bg-gradient-to-tr from-gray-700 to-indigo-900'
//   const text_gradient = ' bg-gradient-to-br from-teal-100 via-teal-200 to-teal-500 text-transparent bg-clip-text'

  return (
<section>
    <div className="pt-8 px-4 mx-auto max-w-screen-xl text-center lg:pt-16 lg:px-12">
        <a href="/dashboard" className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700" role="alert">
            <span className="text-xs bg-light rounded-full text-black px-4 py-1.5 mr-3">New</span>
            <span className="text-sm font-medium text-white">Virtual-ZX10 un Nouveau Labo</span> 
            <svg className="ml-2 w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
        </a>
        <h1 className="mb-4 text-4xl capitalize font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl">Tout ce qui touche <br/> aux sciences des <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">SVT!</span></h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">Un site Web complet pour vous aider à comprendre et étudier les sciences des SVT, Et également faciliter le transfert d&apos;informations de la manière la plus simple ❤️.</p>
        <div className="flex items-baseline justify-center mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a href="/dashboard" >
            <button type="button" className="inline-flex justify-center items-center text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 dark:shadow-lg font-medium rounded-lg px-5 py-2.5 text-center me-2 mb-2">
            COMMENCÉ
            <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
               
            </button>              
        </a>
        <a href="https://youtu.be/22TuvwA7DpA?si=zRpUqkxgGg4OLTDb" target="_blank">
            <button type="button" className="relative inline-flex justify-center items-center overflow-hidden group text-purple-700 hover:text-white  bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-lg px-1 py-1 text-center me-2 mb-2">
            <span className="relative transition-all ease-in duration-75 px-4.5 py-1.5 bg-bodybg rounded-md group-hover:bg-opacity-0">
              PROPOS NOS       
            </span>
            </button>              
        </a>
        </div>

    </div>
</section>
  );
};

export default Hero;