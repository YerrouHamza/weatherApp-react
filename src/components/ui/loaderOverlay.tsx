const LoaderOverlay = () => {
    return (
      <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black dark:bg-white bg-opacity-50 dark:bg-opacity-50 z-max">
        <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-blue-800 border-t-transparent"></div>
      </div>
    );
  };
  
  export default LoaderOverlay;