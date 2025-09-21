const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white z-[1000]">
      <div className="border-[5px] border-solid border-gray-300 border-t-[5px] border-t-blue-500 rounded-full w-[50px] h-[50px] mb-4 animate-spin"></div>
      <p>Sippi-Cup ☕ Loading Podcasts...</p>
    </div>
  );
};

export default LoadingSpinner;